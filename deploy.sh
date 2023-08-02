revised=$(date +"%m-%d-%y")
echo $revised

sed -ri "s/(<meta name=\"revised\" content=\")[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}(\" \/>)/\1$new_date\2/" src/components/BaseHead.astro

git pull
git add src/components/BaseHead.astro
git commit -m"BaseHead revised to $revised"
git push