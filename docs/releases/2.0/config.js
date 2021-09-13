var respecConfig = {
  specStatus: "base",
  logos: [],
  editors: [{
    name:"Juan Pablo Lovato",
    company:"BFS",
    companyURL:"https://www.bfs.admin.ch"
  }, {
    name:"Sabine Maennel",
    company:"Liip",
    companyURL: "https://www.liip.ch",
  }],
  github: {
    branch: "main",
    repoURL: "https://github.com/opendata-swiss/dcat_ap_ch",
  },
  edDraftURI: "https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html",
  prevED: "https://ech.ch/ech/ech-0200",
  subtitle: "A DCAT Application Profile for Switzerland (Working Draft)",
  localBiblio: {
      "ADMS-SKOS":{
        "href":"https://joinup.ec.europa.eu/svn/adms/ADMS_v1.00/ADMS_SKOS_v1.00.html",
        "title":"ADMS Controlled Vocabularies",
        "publisher":"European Commission",
      },
      "VOCAB-EU-LANG":{
        "href":"http://publications.europa.eu/resource/authority/language",
        "title":"Language",
        "publisher":"Publications Office of the European Union",
      },
      "VOCAB-EU-FILETYPE":{
        "href":"http://publications.europa.eu/resource/authority/filetype",
        "title":"Filetype Vocabulary",
        "publisher":"Publications Office of the European Union",
      },
      "VOCAB-DCAT-AP-DEF":{
        "href":"http://dcat-ap.ch",
        "title":"DCAT-AP CH Standard",
        "publisher":"Verein eCH",
      },
      "DCAT-AP-CH-1":{
        "href":"http://ech.ch/ech/ech-0200",
        "title":"eCH-0200 DCAT-Anwendungsprofil für Datenportale in der Schweiz 4",
        "publisher":"Verein eCH",
      },
      "VOCAB-EU-FREQUENCY":{
        "href":"http://publications.europa.eu/resource/authority/frequency",
        "title":"Language",
        "publisher":"Publications Office of the European Union",
      },
      "VOCAB-DCT-FREQUENCY":{
          "href":"http://dublincore.org/specifications/dublin-core/collection-description/frequency/freq.rdf",
          "title":"The Collection Description Frequency Namespace",
          "publisher":"Dublin Core Collection Description Task Group",
      },
     "DCAT-AP-GITHUB":{
         "href": "https://github.com/SEMICeu/DCAT-AP",
         "title":"DCAT-AP github repo",
         "publisher":"Semantic Interoperability Community",
     },
     "OGD-TERMS-OF-USE":{
          "href":"https://opendata.swiss/terms-of-use",
          "title":"Opendata Swiss Terms of Use",
          "publisher":"Swiss Federal Statistical Office",
     },
     "VOCAB-DCAT-AP-CH-LICENSES":{
          "href":"https://dcat-ap.ch/vocabulary/licenses",
          "title":"Publisher vocabulary for DCAT-AP CH",
          "publisher":"Verein eCH",
     },
     "VOCAB-DCAT-AP-CH-THEMES":{
          "href":"https://dcat-ap.ch/vocabulary/themes",
          "title":"Publisher vocabulary for DCAT-AP CH",
          "publisher":"Verein eCH",
     },
     "VOCAB-DCAT-AP-CH-PUBLISHERS":{
          "href":"https://dcat-ap.ch/vocabulary/publishers",
          "title":"Publisher vocabulary for DCAT-AP CH",
          "publisher":"Verein eCH",
     },
     "VOCAB-EU-PUBLISHERS":{
        "href":"http://publications.europa.eu/resource/authority/corporate-body",
        "title":"Corporate Body",
        "publisher":"Publications Office of the European Union",
     },
    "VOCAB-EU-THEME":{
      "href":"https://publications.europa.eu/resource/authority/data-theme",
      "title":"Data Theme",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-CONTINENT":{
      "href":"http://publications.europa.eu/resource/authority/continent",
      "title":"Continent",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-COUNTRY":{
      "href":"https://publications.europa.eu/resource/authority/country",
      "title":"Country",
      "publisher":"Publications Office of the European Union",
    },
    "VOCAB-EU-PLACE":{
      "href":"https://publications.europa.eu/resource/authority/place",
      "title":"Place",
      "publisher":"Publications Office of the European Union",
    },
    "GEONAMES":{
      "href":"http://sws.geonames.org/",
      "title":"GeoNames",
      "publisher":"GeoNames",
    },
     "DCAT-AP-USE":{
        "href":"https://joinup.ec.europa.eu/sites/default/files/document/2018-04/Report%20on%20DCAT-AP%20use.pdf",
        "title":"Report on DCAT-AP use",
        "publisher":"European Commission",
     },
      "ISO 639-1":{
        "href":"https://en.wikipedia.org/wiki/ISO_639-1",
        "title":"Language 2 Letter Code",
        "publisher":"Wikipedia",
      },
      "GEODCAT-AP-API":{
        "href":"http://geodcat-ap.semic.eu:8890/api/",
        "title": "GeoDCAT AP API: ISO 19139 records in RDF",
        "publisher":"ARe3NA, SEMIC, EU ISA",
      },
      "W3C-URI":{
        "href":"https://www.w3.org/TR/cooluris/",
        "title": "Cool URIs for the Semantic Web",
        "publisher":"W3C",
      },
     "METADATA-DEF":{
        "href":"https://en.wikipedia.org/wiki/Metadata",
        "title": "Metadata",
        "publisher":"Wikipedia",
     },
      "DCAT-UCR":{
        "href":"https://www.w3.org/TR/dcat-ucr/",
        "title":"Dataset Exchange Use Cases and Requirements",
        "publisher":"W3C Working Group",
        "date":"17 Jan 2019"
      },
      "TERMDAT":{
        "href": "https://www.bk.admin.ch/bk/en/home/dokumentation/languages/termdat.html",
        "title": " TERMDAT - The Federal Administration’s terminology database",
        "publisher": "Swiss Federal Chancellery FCh",
      },
      "PLZO_CH": {
        "href": "https://www.cadastre.ch/en/services/service/registry/plz.html",
        "title": "Official directory of towns and cities",
        "publisher": "Geodesy and Federal Directorate of Cadastral Surveying",
      },
      "EUROVOC": {
        "href": "https://op.europa.eu/en/web/eu-vocabularies",
        "title": "EU Vocabularies",
        "publisher": "Publications Office of the European Union",
      },
      "RESPEC":{
        "href": "https://respec.org/docs/",
        "title": "Respec.org",
        "publisher": "W3C",
      },
      "ODI-VOCAB":{
        "href": "https://theodi.org/article/publishers-guide-to-the-open-data-rights-statement-vocabulary/",
        "title": "Publisher’s Guide to the Open Data Rights Statement Vocabulary",
        "publisher": "Open Data Institute",
      },
      "DCAT-PROFILE-GUIDANCE":{
        "href": "https://w3c.github.io/dxwg/profiles/",
        "title": "Profile Guidance",
        "publisher": "W3C",
      },
      "OGD":{
        "href": "https://www.bfs.admin.ch/bfs/en/home/services/ogd.html",
        "title": "Open Government Data",
        "publisher": "Swiss Federal Statistical Office",
      },
      "NaDB":{
        "href": "https://www.bfs.admin.ch/bfs/en/home/nadb/nadb.html",
        "title": "National data management NaDB",
        "publisher": "Swiss Federal Statistical Office ",
      },
      "HYPOTHES-IS":{
        "href":"https://web.hypothes.is",
        "title": "hypothes.is",
        "publisher": "https://web.hypothes.is"
      },
      "DCAT-AP-CH-GITHUB-ISSUES":{
        "href":"https://github.com/opendata-swiss/dcat_ap_ch/issues",
        "title": "GitHub issues for DCAT-AP CH Version 2",
        "publisher": "https://github.com/opendata-swiss"
      },
      "CADASTRE-PLZ-CH":{
        "href": "https://www.cadastre.ch/de/services/service/registry/plz.html",
        "title":"Amtliches Ortschaftenverzeichnis",
        "publisher": "cadastre.ch"
      },
      "DATAPORTAL-EU":{
        "href": "https://data.europa.eu/",
        "title": "data.europa.eu - The official portal for European Data",
        "publisher": "Publication Office of the European Union"
      },
      "RIGHTS-LICENSE-RECOMMENDATION-CH":{
        "href": "https://www.bfs.admin.ch/bfs/de/home/dienstleistungen/ogd/dokumentation.assetdetail.11147095.html",
        "title": "Konzept Rechtliche Rahmenbedingungen",
        "publisher":"Swiss Federal Statistical Office",
      }
    }
};
