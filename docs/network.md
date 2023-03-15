---
id: network
title: Network
---

Nanopublications are published in a **decentralized network of servers**. This network is composed of multiple nanopublications servers deployed at various locations, such as universities, cf. [example server](https://np.petapico.org/) / [paper 1](http://arxiv.org/pdf/1411.2749) / [paper 2](https://doi.org/10.7717/peerj-cs.78)

## 🔭 Nanopub monitor

A service to see **see all servers** in the nanopublications network by accessing the [**nanopub monitor**](http://purl.org/nanopub/monitor) ([monitor code](https://github.com/tkuhn/nanopub-monitor/))

## 🗄️ Nanopublications servers

Each nanopublication server is composed of 3 core services:

- Nanopub API: [instance 1](http://grlc.nanopubs.lod.labs.vu.nl/api/local/local/) / [instance 2](http://130.60.24.146:7881/api/local/local/)
- Tapas interface: [instance 1](http://grlc.nanopubs.lod.labs.vu.nl/tapas/tapas.html) / [instance 2](http://130.60.24.146:7881/tapas/tapas.html)
- Quad Pattern Fragments: [instance 1](http://ldf.nanopubs.lod.labs.vu.nl/np) / [instance 2](http://130.60.24.146:7882/np)

[Source code for the server](https://github.com/tkuhn/nanopub-server)

## 💫 SPARQL endpoint

A public SPARQL endpoint is available to directly query the nanopublications network at [virtuoso.nps.petapico.org/sparql](https://virtuoso.nps.petapico.org/sparql)

## ✅ Validators

And there are **validators** for nanopublications: [instance 1](https://nanopub.petapico.org/) / [instance 2](http://app.tkuhn.eculture.labs.vu.nl/nanopub-validator/) ([source code](https://github.com/tkuhn/nanopub-validator))
