## Getting Started
First, run the development server:

```bash
npm run dev
# to install all dependencies
npm install
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```
## Project Overview
This blog project is developed with NextJs, and we've added a variety of features to enhance its functionality:

# Posts: A robust system to manage blog posts, including:

* A starting page with an overview.
*  Featured posts section.
* All posts page.
*  Single post pages that support code snippets and image rendering.
# Contact Form: A fully functional contact form with:

*  A notification system at the bottom of the page.
*  Back-end integration to handle submissions.
# Back-End Integration:

*  Posts are stored as Markdown files and parsed with custom code.
*  The data for posts is extracted from these Markdown files.
*  An API route to handle contact form submissions, storing messages in a database.

