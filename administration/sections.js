import {
  List, 
  AddableList, 
  SpecificPageModel, 
  AddableModel, 
  TextField,
  EditorField,
  DateField
} from 'simple-cms';
import pages from '../models/pages';
import posts from '../models/posts';
import moment from 'moment';

const sections = [
  new List({
    title: 'Pages',
    description: 'Here you can modify pages on the site',
    children: [
      new SpecificPageModel({
        title: 'Front page',
        description: 'Page that displays at the root',
        dbDocument: pages,
        pageIdentification: {_page: "frontPage"},
        fields: [
          new TextField('title', {
            placeholder: "Nadpis",
            validate: function*(value) {
              if(!value) return ['Vyplňte napdis']
            }
          }),
          new EditorField('content', {
            label: 'content'
          })
        ]
      }),
      new SpecificPageModel({
        title: 'Contact page',
        description: 'Contact page',
        dbDocument: pages,
        pageIdentification: {_page: "contactPage"},
        fields: [
          new TextField('title', {
            placeholder: "Nadpis",
            validate: function*(value) {
              if(!value) return ['Vyplňte napdis']
            }
          }),
          new EditorField('content', {
            label: 'content'
          })
        ]
      }),
      new SpecificPageModel({
        title: 'About page',
        description: 'Page that displays about info',
        dbDocument: pages,
        pageIdentification: {_page: "aboutPage"},
        fields: [
          new TextField('title', {
            placeholder: "Nadpis",
            validate: function*(value) {
              if(!value) return ['Vyplňte napdis']
            }
          }),
          new EditorField('content', {
            label: 'content'
          })
        ]
      }),
    ]
  }),
  new AddableList({
    onOnePage: 5,
    title: 'Blog posts', 
    description: 'Here you can manage blog posts',
    previewFields: ["title", "published"],
    sortQuery: {published: -1},
    dbDocument: posts,
    model: new AddableModel({
      title: "Post",
      description: "",
      fields: [
        new TextField('title', {
          placeholder: "title",
          type: "text",
          validate: function*(value) {
            if(!value) return ["Please fill title!"];
          }
        }),
        new DateField('published', {
          label: "Publish at: ",
          default: moment(new Date).format("YYYY-MM-DD"),
          validate: function*(value){
            if(!validateDate(value))
              return ["Not a valid date"];
          }
        }),
        new EditorField('content', {
          label: "Content"
        })
      ]
    })
  })
]

function validateDate(isoDate) {

    if (isNaN(Date.parse(isoDate))) {
        return false;
    } else {
        if (isoDate != (new Date(isoDate)).toISOString().substr(0,10)) {
            return false;
        }
    }
    return true;
}

export default sections;