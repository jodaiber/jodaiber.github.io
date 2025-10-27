---
layout: default
title: Joachim Daiber
---

<div id="frontpage" markdown="1">

## About me

I am an applied scientist focused on machine learning and practical engineering. I was co-founder and CTO of Objective, Inc. ([TechCrunch](https://techcrunch.com/2023/10/18/objective-emerges-from-stealth-to-deliver-multimodal-search-to-developers-as-an-api-platform/)), which was acquired by Upwork in November 2024.
Prior, I was a staff machine learning engineer at Apple in California.

I received my PhD at the [University of Amsterdam](https://www.illc.uva.nl/), where I worked with [Prof. Khalil Sima'an](https://staff.fnwi.uva.nl/k.simaan/) on machine translation. I earned an [Erasmus Mundus Master's in Language and Communication Technologies](http://lct-master.org) at Charles University in Prague and the University of Groningen.

See my full CV [here]({{ '/doc/CV.pdf' | relative_url }}) or connect at [GitHub](http://github.com/jodaiber), [LinkedIn](https://www.linkedin.com/pub/joachim-daiber/84/279/93a) or write an email to daiber.joachim [at] gmail.com.

## Research

My research interests are
in applications and evaluation of large language and vision models, machine translation, natural language processing.

- [See my publications on Google Scholar](http://scholar.google.nl/citations?user=sApPUZUAAAAJ)
- [Code and data for my publications](publications)

## News

<!-- prettier-ignore -->
- <span class="date-align">Nov 2025</span> <span class="seperator">~</span> <span class="post-desc">Paper on efficient LLM tool use at EMNLP 2025 (industry track).</span>
- <span class="date-align">Nov 2024</span> <span class="seperator">~</span> <span class="post-desc">Objective, Inc. was acquired by Upwork.</span>
- <span class="date-align">Sep 2021</span> <span class="seperator">~</span> <span class="post-desc">I started [Objective, Inc.](https://techcrunch.com/2023/10/18/objective-emerges-from-stealth-to-deliver-multimodal-search-to-developers-as-an-api-platform/) with Pablo and Lance.</span>
- <span class="date-align">Jul 2020</span> <span class="seperator">~</span> <span class="post-desc">MKQA paper published in TACL, first machine learning dataset by Apple.</span>
{: .posts}

{% for post in site.posts %}

{% if forloop.first %}

## Posts

<ul class="posts">

{% endif %}

    {% if post.external_url %}
        <li><span class="date-align">{{ post.date | date: "%b %Y" }}</span> <span class="seperator">~</span> <span class="post-desc">{{ post.category }}: <a href="{{ post.external_url }}">{{ post.title }}</a></span></li>
    {% else %}
        <li><span class="date-align">{{ post.date | date: "%b %Y" }}</span> <span class="seperator">~</span> <span class="post-desc">{{ post.category }}: <a href="{{ post.url | relative_url }}">{{ post.title }}</a></span></li>
    {% endif %}

{% if forloop.last %}

</ul>

{% endif %}

{% endfor %}

## Photography

<div class="instagram-feed">
<p id="instafeed-status" class="instafeed-status">Loading latest photos…</p>
<div
  id="instafeed"
  data-feed-url="https://feeds.behold.so/LgJLioqQL2o4PvjncuBT"
  data-limit="12"
  aria-live="polite"
></div>
</div>

</div>

<script src="{{ '/js/behold-feed.js' | relative_url }}" defer></script>
