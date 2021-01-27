---
title: Connect Traces and Profiles
kind: Documentation
further_reading:
    - link: 'tracing'
      tag: 'Documentation'
      text: 'APM Distributed Tracing'
    - link: 'tracing/profiler/getting_started'
      tag: 'Documentation'
      text: 'Enable continuous profiler for your application.'
    - link: 'tracing/profiler/intro_to_profiling'
      tag: 'Documentation'
      text: 'Intro to profiling.'
---

If your application is showing performance problems in production, it's helpful to connect the distributed trace information from APM with the full profile of the code stack. Application processes that have both APM distributed tracing and continuous profiler enabled are automatically linked, so you can move directly from span information to profiling data on the Code Hotspots tab, and find specific lines of code related to performance issues.

