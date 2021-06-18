# DCAT-AP-CH

This github repo is intended to prepare the further development of 
DCAT-AP-CH by providing a definition area for all its documents.

## About

The Specification uses respec: https://respec.org/docs/

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

