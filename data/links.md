# Computers

## Open EMU

[Compiling From Source Guide · OpenEmu/OpenEmu Wiki · GitHub](https://github.com/OpenEmu/OpenEmu/wiki/Compiling-From-Source-Guide)

#### Keyboard input issue

[Keyboard not working · Issue #659 · OpenEmu/OpenEmu · GitHub](https://github.com/OpenEmu/OpenEmu/issues/659)

[Keyboard completely refuses to work · Issue #798 · OpenEmu/OpenEmu · GitHub](https://github.com/OpenEmu/OpenEmu/issues/798)

[Keyboard not working?? · Issue #2265 · OpenEmu/OpenEmu · GitHub](https://github.com/OpenEmu/OpenEmu/issues/2265)

[Keyboard not workning on mac · Issue #3522 · OpenEmu/OpenEmu · GitHub](https://github.com/OpenEmu/OpenEmu/issues/3522)

[Keyboard problems - OpenEmu is logging events, but not using them. Troubleshooting page exhausted · Issue #3388 · OpenEmu/OpenEmu · GitHub](https://github.com/OpenEmu/OpenEmu/issues/3388)

[OpenEmu Team on Twitter: "For those with controller input issues. Try closing Google Chrome, restart OE and see what happens. (Chrome is keyboard / input hog)"](https://twitter.com/openemu/status/417129283140603905?lang=en)

--- 

## Video Game Console Emulators

[YouTube —NES Emulator Part #1: Bitwise Basics & Overview ](https://www.youtube.com/watch?v=F8kx56OZQhg) 

[YouTube — how were early pokemon games programmed?](https://www.youtube.com/results?search_query=how+were+early+pokemon+games+programmed)

---

## Software Testing

[Increment: Testing](https://increment.com/testing/) —— just in time for the push towards testing at tab32

[Interview: Dorothy Graham – Increment: Testing](https://increment.com/testing/interview-dorothy-graham/)

[Dorothy Graham, Mark Fewster - Experiences of Test Automation_ Case Studies of Software Test Automation-Addison-Wesley Professional (2012).epub](:storage/ba314c8d-55e5-4a67-903b-c4695ff9f7ae/caf7e93d.epub) —— 

[The Art of Software Testing by Genford Meyers 2004 pdf](http://barbie.uta.edu/~mehra/Book1_The%20Art%20of%20Software%20Testing.pdf)

[Certifying Software Testers Worldwide - ISTQB® International Software Testing Qualifications Board](https://www.istqb.org/)

[Julian Harty | Better Software Testing Blog](http://blog.bettersoftwaretesting.com/author/admin/)

---

## CSS

[Using media queries - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) —— showed me how to get started making youtubestinks dot com's elements responsive

---

## HTML

[html - How to write a caption under an image? - Stack Overflow](https://stackoverflow.com/questions/10128950/how-to-write-a-caption-under-an-image) -- showed me syntax for figures

[15 Best Web Safe HTML & CSS Fonts - websitesetup.org](https://websitesetup.org/web-safe-fonts-html-css/) —— probably not a comprehensive look at all the safe fonts, but I chose verdana

-- Wordpress

[How To Install WordPress with LAMP on Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04)

[Configure a local WordPress development on macOS from scratch \| pawelgrzybek.com](https://pawelgrzybek.com/configure-a-local-wordpress-development-on-macos-from-scratch/#enable-rewrites)

[Preparing Image Files Before Uploading with WordPress | OM4](https://om4.com.au/client/preparing-image-files-before-uploading-with-wordpress/) —— gave me an idea on how to size the images for my site

[Debugging in WordPress \| WordPress.org](https://wordpress.org/support/article/debugging-in-wordpress/)

[Solution to WordPress Showing IP Address Instead of Domain - ServerPilot](https://serverpilot.io/docs/solution-to-wordpress-showing-ip-address-instead-of-domain/)

---

## Databases

[sql - How to store a list in a db column - Stack Overflow](https://stackoverflow.com/questions/444251/how-to-store-a-list-in-a-db-column)

[sql - How to store a list in a column of a database table - Stack Overflow](https://stackoverflow.com/questions/3070384/how-to-store-a-list-in-a-column-of-a-database-table) —— why you shouldn't

#### MySQL

[Reducing memory consumption of mysql on ubuntu@aws micro instance - Stack Overflow](https://stackoverflow.com/questions/10676753/reducing-memory-consumption-of-mysql-on-ubuntuaws-micro-instance?newreg=fd28455aeaaa4e68ba10f9fa2c6b08fc) —— I was trying to serve wordpress from a single (tiny) AWS EC2 VPS, and getting errors because the memory kept getting maxed out... A couple things about this answer:
1. `key_buffer` is now `key_buffer_size`
2. `query_cache_size` and `query_cache_limit` are depricated
3. I saw the biggest reduction in memory footprint from adding `performance_schema = 0` to my.cnf -- the accepted answer didn't seem to help much

[MySQL 8.0: Retiring Support for the Query Cache \| MySQL Server Blog](https://mysqlserverteam.com/mysql-8-0-retiring-support-for-the-query-cache/) —— More information about query cache, and why it's been depricated

[MySQL :: MySQL 8.0 Reference Manual :: 5.1.4 Server Option, System Variable, and Status Variable Reference](https://dev.mysql.com/doc/refman/8.0/en/server-option-variable-reference.html) —— Pulled this up when I was checking to see if the options in an example my.cnf file were still valid. 

#### MongoDB 
[mongodb - How to check if mongo db is running on Mac? - Stack Overflow](https://stackoverflow.com/questions/31561098/how-to-check-if-mongo-db-is-running-on-mac)

#### PostgreSQL

[Generating URL-Safe Short IDs in Postgresql \| &yet blog](https://blog.andyet.com/2016/02/23/generating-shortids-in-postgres/)

[postgresql unique non-sequential id for url - Stack Overflow](https://stackoverflow.com/questions/56081894/postgresql-unique-non-sequential-id-for-url)

---

## Encryption

[security - How can bcrypt have built-in salts? - Stack Overflow](https://stackoverflow.com/questions/6832445/how-can-bcrypt-have-built-in-salts#:~:text=The%20bcrypt%20utility%20itself%20does,is%20not%20just%20the%20hash.) 

[Tutorial: Configure SSL/TLS on Amazon Linux 2 - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt)


