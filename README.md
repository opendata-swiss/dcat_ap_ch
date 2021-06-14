# DCAT-AP-CH

This github repo is intended to prepare the further development of 
DCAT-AP-CH by providing a definition area for all its documents.

## About

The Specification uses respec: https://respec.org/docs/

## Deploy to a Static Server

Staging is running at:

```
https://dcat-ap-ch-def.clients.liip.ch/
```

Get to server:

```
ssh -p 2202 -l liip ps8.ms.bsa.oriented.ch
cd /var/www/html/dcat-ap-ch-def.clients.liip.ch/
```

deploy documents

```
cd docs
tar -zcf dcat-ap-ch-def.tar.gz .
scp -P 2202 dcat-ap-ch-def.tar.gz liip@ps8.ms.bsa.oriented.ch:/var/www/html/dcat-ap-ch-def.clients.liip.ch/
ssh -p 2202 -l liip ps8.ms.bsa.oriented.ch
cd /var/www/html/dcat-ap-ch-def.clients.liip.ch
tar -xzf dcat-ap-ch-def.tar.gz
``` 

Now the site should be reachable at `https://dcat-ap-ch-def.clients.liip.ch`.


## Install pyshacl

```
git clone <repo>
python3 -m venv p3venv
source p3venv/bin/activate
pip install -r requirements.txt
```

