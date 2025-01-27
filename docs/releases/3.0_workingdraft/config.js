var respecConfig = {
  specStatus: "base",
  logos: [],
  editors: [{
    name: "Members of the eCH Open Government Data specialist group",
    company: "eCH Open Government Data specialist group",
    companyURL:"https://www.ech.ch/de/der-verein/fachgruppen/open_government_data"
  },{
    name:"Maik Roth",
    company:"Open Government Data Office, BFS",
    companyURL:"https://www.bfs.admin.ch/bfs/en/home/services/ogd/office.html",
    note: "Head of eCH Open Government Data specialist group",
  },{
    name: "Stephan Haller",
    company:"BFH",
    companyURL:"https://www.bfh.ch",
    note: "Co-Head of eCH Open Government Data Specialist Group",
  },  {
    name:"Michèle Spichtig",
    company:"Open Government Data Office, BFS",
    companyURL: "https://www.bfs.admin.ch/bfs/en/home/services/ogd/office.html",
    note: "Support Head of eCH Open Government Data specialist group ",
  }],
  github: {
    branch: "main",
    repoURL: "https://github.com/opendata-swiss/dcat_ap_ch",
  },
  edDraftURI: "https://dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html",
  prevED: "https://ech.ch/ech/ech-0200",
  subtitle: "A DCAT Application Profile for Switzerland (Working Draft)",
  localBiblio: {
    "DATAPORTAL-EU":{
      "href": "https://data.europa.eu/",
      "title": "data.europa.eu - The official portal for European Data",
      "publisher": "Publication Office of the European Union"
    },
    "DCAT-AP":{
      "href": "https://semiceu.github.io/DCAT-AP/releases/3.0.0/",
      "title": "DCAT-AP 3.0",
      "publisher": "Semic"
    },
    "DCAT-AP-GITHUB-ISSUES":{
      "href":"https://github.com/opendata-swiss/dcat_ap_ch/issues",
      "title": "GitHub issues for DCAT-AP CH Version 2",
      "publisher": "https://github.com/opendata-swiss"
    },
    "DCAT-AP-USAGEGUIDE":{
      "href": "https://github.com/SEMICeu/DCAT-AP/blob/2.1.0-draft/releases/2.1.0/usageguide-dataset-distribution-dataservice.md",
      "title": "Usage guide on Datasets, Distributions and Data Services",
      "publisher": "Publication Office of the European Union"
    },
    "GEONAMES":{
      "href":"http://sws.geonames.org/",
      "title":"GeoNames",
      "publisher":"Geonames",
    },
    "ISO 639-1":{
      "href":"https://en.wikipedia.org/wiki/ISO_639-1",
      "title":"Language 2 Letter Code",
      "publisher":"Wikipedia",
    },
    "PROV":{
      "href":"http://www.w3.org/ns/prov/",
      "title":"The PROV Namespace",
      "publisher":"Provenance Working Group",
    },
    "SPDX":{
      "href":"https://spdx.org/rdf/terms/",
      "title":"SPDX 2.2.1",
      "publisher":"The Linux Foundation",
    },
    "ODRL":{
      "href":"https://www.w3.org/ns/odrl/2/",
      "title":"ODRL Version 2.2 Ontology",
      "publisher":"W3C",
    },
    "VOCAB-ODRL":{
      "href":"https://www.w3.org/TR/odrl-vocab/",
      "title":"ODRL Vocabulary & Expression 2.2",
      "publisher":"W3C",
    },
    "MODEL-ODRL":{
      "href":"https://www.w3.org/TR/odrl-model/",
      "title":"ODRL Information Model 2.2",
      "publisher":"W3C",
    },
    "ADMS":{
      "href":"https://semiceu.github.io/ADMS/releases/2.00/",
      "title":"ADMS Vocabulary",
      "publisher":"Semic",
    },
    "RESPEC":{
      "href": "https://respec.org/docs/",
      "title": "Respec.org",
      "publisher": "W3C",
    },
    "TERMDAT":{
      "href": "https://www.bk.admin.ch/bk/en/home/dokumentation/languages/termdat.html",
      "title": " TERMDAT - The Federal Administration’s terminology database",
      "publisher": "Swiss Federal Chancellery FCh",
    },
    "VOCAB-CH-LICENSE":{
      "href":"https://dcat-ap.ch/vocabulary/licenses",
      "title":"List of licenses for Swiss opendata to enter in dct:license",
      "publisher":"Verein eCH",
    },
    "VOCAB-CH-THEME":{
      "href":"http://dcat-ap.ch/vocabulary/themes",
      "title":"Themes vocabulary for DCAT-AP CH",
      "publisher":"Verein eCH",
    },
    "VOCAB-DCAT-AP":{
      "href":"https://semiceu.github.io/DCAT-AP/r5r/releases/3.0.0/",
      "title": "DCAT-AP vocabulary, the r5r namespace",
      "publisher": "Semic",
    },
    "VOCAB-EU":{
       "href":"http://publications.europa.eu/resource/authority/",
      "title":"EU Vocabularies",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-ACCESS-RIGHT":{
      "href":"http://publications.europa.eu/resource/authority/access-right",
      "title":"Access Rights Named Authority List",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-AVAILABLITY":{
      "href":"http://publications.europa.eu/resource/authority/planned-availability",
      "title":"availability vocabulary",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-STATUS":{
      "href":" 	http://publications.europa.eu/resource/authority/distribution-status/",
      "title":"status vocabulary",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-CONTINENT":{
      "href":"http://publications.europa.eu/resource/authority/continent",
      "title":"EU Vocabularies Continents Named Authority List",
      "publisher":"Publications Office of the European Union",
     },
    "VOCAB-EU-COUNTRY":{
      "href":"https://publications.europa.eu/resource/authority/country",
      "title":"EU Vocabularies Countries Named Authority List",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-FILE-TYPE":{
      "href":"http://publications.europa.eu/resource/authority/file-type",
      "title":"EU Vocabularies File Type Named Authority List",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-FREQUENCY":{
      "href":"http://publications.europa.eu/resource/authority/frequency",
      "title":"EU Vocabularies Frequency Named Authority List",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-LANGUAGE":{
      "href":"http://publications.europa.eu/resource/authority/language",
      "title":"Continent",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-PLACE":{
      "href":"https://publications.europa.eu/resource/authority/place",
      "title":"Vocabularies Places Named Authority List",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-THEME":{
      "href":"https://publications.europa.eu/resource/authority/data-theme",
      "title":"Dataset Theme Vocabulary",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-OP-CONTACT":{
      "href":"https://op.europa.eu/en/web/about-us/contact-us",
      "title":"EU Vocabularies",
      "publisher":"Publications Office of the European Union",
    },
    "MASTADS":{
      "href":"https://archive.stsci.edu/pub_dsn.html",
      "title":"Referencing Data Sets in Astronomical Literature",
      "publisher":"Mikulski Archive for Space Telescopes",
    },
    "DOI":{
      "href":"https://www.doi.org/",
      "title":"DOI",
      "publisher":"DOI Foundation",
    },
    "EZID":{
      "href":"https://ezid.cdlib.org/",
      "title":"EZID identifiers made easy",
      "publisher":"California Digital Library",
    },
    "EZID":{
      "href":"https://w3id.org/",
      "title":"Permanent Identifiers for the Web",
      "publisher":"W3C Permanent Identifier Community Group",
    },
    "DATACITE":{
      "href":"https://datacite.org/",
      "title":"DataCite",
      "publisher":"DataCite",
    },
  }
};
