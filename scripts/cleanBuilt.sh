#!/bin/bash
printf "\e[48;2;50;50;50m\e[38;5;033m\03🚮 \e[1mCleanup built folder in Mox\e[0m\n"
if test -d "./storybook"; then
  printf "\033[0;32m\tstrorybook\c"
  rm -rf storybook
  echo -e "\t\t\033[0;30mdeleted"
else
  echo -e "\033[0;31m\tstorybook"
fi

if test -d "./build"; then
  echo -e "\033[0;32m\tbuild\c"
  rm -rf build
  echo -e "\t\t\033[0;30mdeleted"
else
  echo -e "\033[0;31m\tbuild"
fi

if test -d "./docs"; then
  echo -e "\033[0;32m\tdocs\c"
  rm -rf docs
  echo -e "\t\t\033[0;30mdeleted"
else
  echo -e "\033[0;31m\tdocs"
fi
echo -e "\033[0m\c"
