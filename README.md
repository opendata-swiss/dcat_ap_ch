# DCAT-AP-CH

This github repo is intended to serve as a definition area for DCAT-AP CH.

## About

The repository includes the following parts:

- the html DCAT-AP CH specification version 2, that is currently a draft and undergoing a review 
  process.
The repositoySpecification uses respec: https://respec.org/docs/



## Install pyshacl

```
git clone <repo>
python3 -m venv p3venv
source p3venv/bin/activate
pip install -r requirements.txt
```

To run pyshacl use the following command:

```
pyshacl -s /path/to/shapesGraph.ttl -m -i rdfs -a -j -f human /path/to/dataGraph.ttl
```

## Validate with the EU-Testbed

https://www.itb.ec.europa.eu/shacl/dcat-ap/upload

Here is what the validators on that page mean: https://github.com/ISAITB/validator-resources-dcat-ap

## Known Issues

The specfication needs the W3C Server to be up to render correctly. This server
seems to have downtimes with some frequency: so if the specification looks funny:
check here: https://www.isitdownrightnow.com/w3.org.html and see whether the W3C Server is up,
before filing an issue.

## Caching of Issues

Github issues are cached for 12 hours. So if you edit a github issue, the changes will only show in respec
after 12 hours.
