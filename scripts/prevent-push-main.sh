#!/bin/bash

protected_branch='main'
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ "$current_branch" = "$protected_branch" ]; then
    echo "❌ You are attempting to push directly to the '$protected_branch' branch."
    echo "Please use a pull request instead."
    exit 1
fi
