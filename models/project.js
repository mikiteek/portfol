const uuid = require("uuid").v4();
const fs = require('fs');
const path = require("path");

class Project {
  constructor(title, image, description, linkPage, linkSource, author) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.linkPage = linkPage;
    this.linkSource = linkSource;
    this.author = author;
    this.id = uuid;
  }
  toJSON() {
    return {
      title: this.title,
      image: this.image,
      description: this.description,
      linkPage: this.linkPage,
      linkSource: this.linkSource,
      author: this.author,
      id: this.id
    };
  }
  async save() {
    const projects = await Project.getAll();
    projects.push(this.toJSON());
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'projects.json'),
        JSON.stringify(projects),
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    })
  }
  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "projects.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }
}

module.exports = Project;