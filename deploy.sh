REVISITED=$(date +"%m-%d-%y")
echo $REVISITED
sed -ri "s/(<meta name=\"revised\" content=\")(.*)(\" \/>)/\1$REVISITED\3/" ./src/components/BaseHead.astro

git pull
git add ./src/components/BaseHead.astro
git commit -m"BaseHead revised to $REVISITED"
git push