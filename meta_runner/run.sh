set -e

(cd /tmp/meta_runner/; echo $1 > queries.txt)
(cd /tmp/meta_runner/build; ./query-runner config.toml | grep docid)

