set -e

sudo apt-get update
sudo apt-get install -y --force-yes python-software-properties

sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update

sudo apt-get install -y --force-yes g++ g++-4.8 git make wget libjemalloc-dev zlib1g-dev