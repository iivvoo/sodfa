#!/usr/bin/python

out = open("document.js", "w")
doc = open("myfile.odt", "r").read()

out.write("docdata = %r;" % doc)
out.close()
