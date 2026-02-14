#!/bin/bash

# Define colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting GUI Portfolio...${NC}"

# Function to handle cleanup on exit
cleanup() {
    echo -e "${RED}Stopping all processes...${NC}"
    # Kill all child processes of this script
    pkill -P $$ 
    exit
}

# Trap SIGINT (Ctrl+C) to run cleanup
trap cleanup SIGINT

# Start Frontend
if [ -d "apps/web" ]; then
    echo -e "${GREEN}Starting Frontend (apps/web)...${NC}"
    npm run dev -w @gui-portfolio/web &
    FRONTEND_PID=$!
else
    echo -e "${RED}Frontend not found in apps/web!${NC}"
fi

# Check for Backend
BACKEND_FOUND=false
# Common backend directory names
POSSIBLE_BACKEND_DIRS=("apps/api" "apps/server" "apps/backend" "packages/api" "packages/server" "packages/backend")

for dir in "${POSSIBLE_BACKEND_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo -e "${GREEN}Found Backend at $dir. Starting...${NC}"
        # Only try to start if we find package.json inside
        if [ -f "$dir/package.json" ]; then
             # Extract package name for workspace command if possible, otherwise just run in dir
             # Assuming standard workspace structure, we can try to guess the package name or run directly
             # Ideally we would parse package.json but for simplicity let's try to run via npm with workspace if we knew the name.
             # Since we don't know the exact workspace name without parsing, running directly in the directory might be safer/easier for a generic script, 
             # BUT npm workspaces usually require running from root with -w.
             # Let's try to find the name.
             
             PACKAGE_NAME=$(grep -o '"name": *"[^"]*"' "$dir/package.json" | cut -d'"' -f4)
             if [ -n "$PACKAGE_NAME" ]; then
                 echo -e "${GREEN}Starting Backend workspace: $PACKAGE_NAME${NC}"
                 npm run dev -w "$PACKAGE_NAME" &
                 BACKEND_PID=$!
                 BACKEND_FOUND=true
                 break
             else
                 echo -e "${RED}Could not determine package name for $dir.${NC}"
             fi
        fi
    fi
done

if [ "$BACKEND_FOUND" = false ]; then
    echo -e "${RED}No backend directory found. Only starting frontend.${NC}"
    echo -e "${RED}If you have a backend, please ensure it is in apps/api, apps/server, or similar.${NC}"
fi

# Wait for processes
wait $FRONTEND_PID $BACKEND_PID
