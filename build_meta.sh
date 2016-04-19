set -e

wget http://www.cmake.org/files/v3.2/cmake-3.2.0-Linux-x86_64.sh --no-check-certificate > /dev/null
sudo sh cmake-3.2.0-Linux-x86_64.sh --prefix=/usr/local --skip-license

g++-4.8 --version

/usr/local/bin/cmake --version

# clone the project
git clone https://github.com/meta-toolkit/meta.git
cd meta/

# set up submodules
git submodule update --init --recursive

# set up a build directory
mkdir build
cd build
cp ../config.toml .

# configure and build the project
CXX=g++-4.8 /usr/local/bin/cmake ../ -DCMAKE_BUILD_TYPE=Release
make

./unit-test --reporter=spec