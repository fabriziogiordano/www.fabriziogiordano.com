revised=$(date +"%m-%d-%y")
echo $revised
sed -ri "s/(<meta name=\"revised\" content=\")(.*)(\" \/>)/\1$revised\3/" ./src/components/BaseHead.astro
git pull
git add ./src/components/BaseHead.astro
git commit -m"BaseHead revised to $revised"
git push