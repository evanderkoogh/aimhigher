import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from '../../layouts/home/index.js';
import StandardPage from '../../layouts/standard/index.js';
import ProductsServices from '../../layouts/services/index.js';
import Portfolio from '../../layouts/portfolio/index.js';
import Feed from '../../layouts/blog/index.js';
import Article from '../../layouts/blog/article/index.js';
import {StyleGuide} from '../style-guide/index.js';
import ClientPortal from '../../layouts/clientPortal/index.js';

export const menuItems = [
  {
		slug: '/',
		title: 'Home',
		component: Home,
		hideNav: true,
  },
  {
		slug: '/about',
		title: 'About',
  },
  {
		slug: '/services',
		title: 'Services',
		component: ProductsServices,
  },
  {
		slug: '/portfolio',
		title: 'Portfolio',
    component: Portfolio,
  },
  {
		slug: '/ethics',
    title: 'Code of Ethics',
    hideNav: true,
  },
  {
		slug: '/faq',
		title: 'FAQ',
  },
  {
		slug: '/blog',
		title: 'Blog',
    component: Feed,
    hideNav: true,
    subPages: [
      {
        slug: '/:id',
        title: 'Article',
        component: Article,
        hideNav: true
      }
    ]
  },
  {
		slug: '/contact',
		title: 'Contact',
  },
  {
    slug: '/style-guide',
    title: 'Style Guide',
    component: StyleGuide,
    hideNav: true,
  },
  {
    slug: '/client/:clientName',
    title: 'Client Portal',
    component: ClientPortal,
    hideNav: true,
  }
];

export const legalItems = [
  {
    slug: '/privacy',
    title: 'Privacy Policy',
  },
  {
    slug: '/terms',
    title: 'Terms and Conditions',
  }
];

const routeItems = menuItems.concat(legalItems);

class App extends Component {
  render() {
    let subPages = [],
        pages = routeItems.map((page) => {

          if(page.subPages) {
            let subp = page.subPages;
            let thisSubPages = subp.map((subpage) => {
              return (
                <Route path={page.slug + subpage.slug} exact component={subpage.component} key={subpage.slug} />
              );
            });

            const sp = subPages;

            subPages = sp.concat(thisSubPages);

            return (
                <Route key={page.slug} path={page.slug} exact component={page.component} />
            );
          }
          else if (page.component) {
            return (
              <Route path={page.slug} exact component={page.component} key={page.slug} />
            );
          }
    });
    
    return (        
      <Switch>
          {pages}
          {subPages}
          <Route component={StandardPage} />
      </Switch>
    );
  }
};

export default App;