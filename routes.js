function showPage(pageId) {
      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
    }



 document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hapus class active dari SEMUA link
        document.querySelectorAll('a').forEach(item => {
          item.classList.remove('active');
          item.classList.add('deactive');
        });

        // Ubah link yang diklik menjadi active
        this.classList.remove('deactive');
        this.classList.add('active');
      });
    });

