npm test
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"  # This line is required for Husky
npm run lint
npm test
