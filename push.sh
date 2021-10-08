#!/bin/bash

git checkout optifine && git merge master && git push
git checkout halogen && git merge master && git push

git checkout master
