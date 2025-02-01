source /home/ubuntu/.nvm/nvm.sh;

cd /home/ubuntu/
pm2 delete demo
rm -rf demo
mkdir demo
tar -xzvf develop.tar -C demo
rm develop.tar
cd demo
pm2 start --name demo npm -- start