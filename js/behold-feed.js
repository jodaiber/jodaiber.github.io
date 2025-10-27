(function () {
  function initBeholdFeed() {
    var feedContainer = document.getElementById('instafeed');
    if (!feedContainer) {
      return;
    }

    var statusEl = document.getElementById('instafeed-status');
    var feedUrl = feedContainer.getAttribute('data-feed-url');
    var limit = parseInt(feedContainer.getAttribute('data-limit') || '12', 10);

    if (!feedUrl) {
      setStatus('Instagram feed configuration is missing.', true);
      return;
    }

    fetch(feedUrl, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Unable to load feed.');
        }
        return response.json();
      })
      .then(function (payload) {
        var posts = Array.isArray(payload.posts) ? payload.posts : [];
        if (!posts.length) {
          throw new Error('Feed returned no posts.');
        }

        var fragment = document.createDocumentFragment();
        posts.slice(0, limit).forEach(function (post) {
          if (!post || !post.permalink) {
            return;
          }

          var imageUrl =
            (post.sizes && post.sizes.small && post.sizes.small.mediaUrl) ||
            post.mediaUrl;

          if (!imageUrl) {
            return;
          }

          var anchor = document.createElement('a');
          anchor.href = post.permalink;
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';

          var caption = (post.caption || '').trim();
          if (caption) {
            anchor.title = caption.split('\n')[0];
          }

          var img = document.createElement('img');
          img.loading = 'lazy';
          img.src = imageUrl;
          img.alt = caption || 'Instagram photo';

          anchor.appendChild(img);
          fragment.appendChild(anchor);
        });

        feedContainer.innerHTML = '';
        feedContainer.appendChild(fragment);
        setStatus('', false);
      })
      .catch(function (error) {
        console.error('Instagram feed error:', error);
        setStatus('Instagram photos are unavailable right now.', true);
      });

    function setStatus(message, isError) {
      if (!statusEl) {
        return;
      }
      statusEl.textContent = message;
      statusEl.classList.toggle('is-error', Boolean(isError));
      statusEl.hidden = !message;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBeholdFeed);
  } else {
    initBeholdFeed();
  }
})();
