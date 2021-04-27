# h5p-kaltura
A quick hack to embed Kaltura videos into H5P using the iframe embedder tool. Useful if your institution only offers a building block for Kaltura in your LMS.

## Getting Started

To get a local copy up and running follow these simple steps.
1. Clone repository to a web-server capable of serving up HTML files.
2. Run `npm install` to install components necessary for building minified CSS.
3. Run `gulp build` to build the minified CSS.

Once up and running, follow these steps to create a page for the file.
1. Create a new HTML file in the `/public` directory anytime you'd like to shoehorn Kaltura into your H5P module.
2. Update the details in curly brackets {{}}.
3. Use the [iframe embedder component](https://h5p.org/iframe-embedder) to embed the HTML file you're hosting.

## Usage

Using a version of Kaltura that doesn't create a neat media URL? H5P makes it notoriously difficult to embed non-YouTube/Vimeo resources into their platform. This was a quick hack I threw together for a project to make it work. I hope it helps a few other people out, too.

This requires you to have somewhere to host HTML files, but in a pinch [GitHub Pages](https://pages.github.com/) should get you up and running. Be careful not to make these files indexable as otherwise your otherwise private videos will be public to the world!

I have tested this with JAWS and it seems to be navigable with a screen reader. But, please take this with a grain of salt as not all screen readers behave the same. You should do your own a11y testing if you are in a fortunate position to do so.

## Contact

Cameron Morgan - [@asitwouldseem](https://twitter.com/asitwouldseem)
