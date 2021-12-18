# Illini Blockchain Website
[Link to mockups on Figma](https://www.figma.com/file/eOlu07APhtKh3n8A5u1dDS/Illini-Blockchain-Website?node-id=0%3A1)

Illini Blockchain's website. Homebase for people to learn more about us, find our content, and get involved. Made with Nextjs and styled components, deployed on TBD.

## Installation

Clone the repo.
```bash
git clone https://github.com/IlliniBlockchain/website.git
```
Install dependencies.
```bash
npm install
```
Run app in development mode.
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure
To get assimilated to the setup, you should get to know the file structure a bit. Components is organized as follows: first level of folders for pages and important global components, within these folders hold components that are used only by that page with folders for multi-component components and single files for styled components. All folders here use an `index.js` file to export the components in that folder for nicer imports. `shared` is for components used in multiple pages, and `shared-styled` is the same but for styled components. This structure is subject to change.

Here is a brief example/preview.
```
  components/
    about/
    blog/
    contact/
    home/
      LandingBanner/
        LandingContainer.js
        LandingHeader.js
        LandingSubheader.js
        index.js
      NewsletterBanner/
      index.js
      ...
    projects/
    layout/
    shared/
    shared-styled/
  pages/
    api/
    _app.js
    _document.js
    about.js
    blog.js
    contact.js
    index.js
    projects.js
  public/
  styles/
  package.json
  ...
```

## Contributing
Go to issues, pick one to work on.

Make sure your main branch in updated.
```
git checkout main
git pull
```

Make a new branch locally.
```
git checkout -b new-branch-name
```

Make your changes and make sure everything is working and looking good locally (making commits along the way of course). Push your branch with your changes to the online repository.
```
git push -u origin new-branch-name
OR after the first time
git push
```

Make a pull request. Put an emoji at the start of the PR name by typing ":" then searching for an emoji. Write about your changes, include screenshots and/or explanations for certain choices. Request someone to review it. Link the issue. Once reviewed, merge.





