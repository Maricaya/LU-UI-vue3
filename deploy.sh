rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "first commit" &&
git push --set-upstream https://github.com/Maricaya/lu-ui-website.git master -f &&
cd ../
echo https://maricaya.github.io/lu-ui-website/index.html#/home