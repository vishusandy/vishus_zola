# Installation

1. Open your project's `themes` directory in terminal

    ```bash
    cd themes
    ```

2. Clone the repo

    ```bash
    git clone https://github.com/vishusandy/vishus_zola
    ```

3. Set the following in your `config.toml` file

    ```toml
    theme = "vishus_zola"
    compile_sass = true
    highlight_code = true
    highlight_theme = "vishus"
    extra_syntaxes_and_themes = ["syntax"]
    ```

4. Ensure your `content/_index.md` contains the following:

    ```toml
    +++
    title = "Index"
    sort_by = "date"
    template = "index.html"
    page_template = "article.html"
    paginate_by = 10
    +++
    ```

