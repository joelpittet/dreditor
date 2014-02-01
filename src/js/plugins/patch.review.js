    $('.field-type-file, table.nodechanges-file-changes', context).once('dreditor-patchreview', function () {
          var $file = $(this).closest('tr').find('.file');
          var $link = $('<a class="dreditor-button dreditor-patchreview" href="' + this.href + '">Review</a>').click(function (e) {
            if (Drupal.dreditor.link !== this && Drupal.dreditor.$wrapper) {
              Drupal.dreditor.tearDown(false);
            }
            if (Drupal.dreditor.link === this && Drupal.dreditor.$wrapper) {
              Drupal.dreditor.show();
            }
            else {
              Drupal.dreditor.link = this;
              // Load file.
              $.get(this.href, function (content, status) {
                if (status === 'success') {
                  // Invoke Dreditor.
                  Drupal.dreditor.setup(context, 'patchReview', content);
                }
              });
            }
            e.preventDefault();
          $link.prependTo($file);
                }).prependTo($file);
    // @todo add sort based on element position back.
    // @todo add sort based on element position back.
  var $code = $('<table id="code"></table>');
    else if (line.match(/^((?!\-\-\-$|\-\-$)\-.*)$/)) {
      // Expose tabs.
      line = line.replace(/(\t+)/, '<span class="error tab">$1</span>');
      // Wrap trailing white-space with a SPAN to expose them during patch
      // review. Also add a hidden end-of-line character that will only appear
      // in the pasted code.
      line = line.replace(/^(.*\S)(\s+)$/, '$1<span class="error whitespace">$2</span><span class="hidden">¶</span>');

      classes.push('new');
      diffstat.insertions++;
      syntax = true;
      if (ln2) {
        ln1o = false;
        ln2++;
    }
    // Replace line with a space (so ruler shows up).
    else if (!line.length) {
      line = '&nbsp;';
    }
    // Match git format-patch EOF lines and reset line count.
    else if (line.match(/^\-\-$/)) {
      ln1o = false;
      ln2o = false;
      ln1 = '';
      ln2 = '';
    }
    // Detect missing newline at end of file.
    else if (line.match(/.*No newline at end of file.*/i)) {
      line = '<span class="error eof">' + line + '</span>';
    }
    else {
      // @todo Also colorizing unchanged lines makes added comments almost
      // invisible. Although we could use .new.comment as CSS selector, the
      // question of a sane color scheme remains.
      // syntax = true;
      if (ln1 && ln1o) {
        ln1++;
      }
      if (ln2 && ln2o) {
        ln2++;
      }
    }