# DCAT-AP CH

This GitHub repo is intended to prepare the further development of 
DCAT-AP CH by providing a definition area for all its documents.
The definition area is available at https://www.dcat-ap.ch/

## Dependence on W3C

The specification of DCAT-AP CH 2.0 uses respec: https://respec.org/docs/

It needs the W3C Server to be up to render correctly. In case there is an issue with the 
specification, it might be related to a downtime of the W3C Server:
Please check here: https://www.isitdownrightnow.com/w3.org.html and see whether the W3C Server is up,
before filing an issue.

## Local development

No server is required for local development: the file `docs/index.html` can be
opened directly in a browser.

## Deployment

To deploy to the server:

- go to https://github.com/opendata-swiss/dcat_ap_ch/actions/workflows/deploy_production.yml
- click "run workflow"
- select the branch to deploy (default is `main`) and then click the green "run workflow" button
