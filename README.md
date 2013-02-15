bam
===

really basic "mini" version of pow (pow.cx) using nack

Serves all rack-based apps in /sites/ folders over port 7000

Setup
===

* Create /sites
* symlink your apps into /sites
  (the app needs to have a config.ru file)

Installation
===

$ git clone git://github.com/scharfie/bam.git
$ cd bam
$ npm install

Run
===

$ node bam.js

Then, you can use xip.io to easily see your sites
(i.e. site.127.0.0.1.xip.io:7000)


Example
===

Suppose the following:

  /sites/foo/config.ru
  /sites/bar/config.ru

Then running "node bam.js" will serve these apps with foo.\*
and bar.\* vhost names.  The easiest way to see the sites is
with xip.io:

  foo.127.0.0.1.xip.io:7000
  bar.127.0.0.1.xip.io:7000
