import type { Schema, Struct } from '@strapi/strapi';

export interface AboutListitem extends Struct.ComponentSchema {
  collectionName: 'components_about_listitems';
  info: {
    displayName: 'listitem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface AboutPerks extends Struct.ComponentSchema {
  collectionName: 'components_about_perks';
  info: {
    displayName: 'perks';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'about.listitem', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['description', 'list']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'description'>;
  };
}

export interface AboutStatscard extends Struct.ComponentSchema {
  collectionName: 'components_about_statscards';
  info: {
    displayName: 'statscard';
  };
  attributes: {
    backgroundcolor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsPageContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_page_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsPageLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_page_location_cards';
  info: {
    displayName: 'LocationCard';
  };
  attributes: {
    socialitems: Schema.Attribute.Component<'footer.socials-item', true>;
    subtext: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsPageLocationSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_page_location_sections';
  info: {
    displayName: 'LocationSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    locationcards: Schema.Attribute.Component<
      'contact-us-page.location-card',
      true
    >;
    mapurl: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.80108376929!2d7.4658619682806036!3d9.07171879562038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf247c5781%3A0x2cd31e9285687a70!2sJaiz%20Bank%20Plc!5e0!3m2!1sen!2sng!4v1724000000000!5m2!1sen!2sng'>;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsPageQuickActionCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_page_quick_action_cards';
  info: {
    displayName: 'QuickActionCard';
  };
  attributes: {
    buttonimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttontext: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ContactUsPageQuickActions extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_page_quick_actions';
  info: {
    displayName: 'QuickActions';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'contact-us-page.quick-action-card',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    type: Schema.Attribute.Enumeration<
      ['external', 'internal', 'phone', 'email']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'internal'>;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    logoImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logoText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    highlightedText: Schema.Attribute.String;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterDownloadApp extends Struct.ComponentSchema {
  collectionName: 'components_footer_download_apps';
  info: {
    displayName: 'DownloadApp';
  };
  attributes: {
    androidLink: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    iosLink: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'elements.title', false> &
      Schema.Attribute.Required;
  };
}

export interface FooterFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_contents';
  info: {
    displayName: 'FooterContent';
  };
  attributes: {
    contents: Schema.Attribute.Component<'footer.footer-details', false>;
    copyrightNotice: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'footer.socials-item', true>;
  };
}

export interface FooterFooterDetails extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_details';
  info: {
    displayName: 'FooterDetails';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    options: Schema.Attribute.Component<'footer.footer-option', true>;
  };
}

export interface FooterFooterOption extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_options';
  info: {
    displayName: 'FooterOption';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface FooterSocialsItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_socials_items';
  info: {
    displayName: 'SocialsItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderHeaderContent extends Struct.ComponentSchema {
  collectionName: 'components_header_header_contents';
  info: {
    displayName: 'HeaderContent';
  };
  attributes: {
    buttontext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    fullGradient: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeActionItem extends Struct.ComponentSchema {
  collectionName: 'components_home_action_items';
  info: {
    displayName: 'ActionItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAiAssitant extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_assitants';
  info: {
    displayName: 'AiAssitant';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface HomeEthicalSolution extends Struct.ComponentSchema {
  collectionName: 'components_home_ethical_solutions';
  info: {
    displayName: 'EthicalSolution';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'home.ethical-solution-item', true>;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface HomeEthicalSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_home_ethical_solution_items';
  info: {
    displayName: 'EthicalSolutionItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface HomeQuickActions extends Struct.ComponentSchema {
  collectionName: 'components_home_quick_actions';
  info: {
    displayName: 'QuickActions';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'home.action-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_home_solution_items';
  info: {
    displayName: 'solutionItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'elements.title', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeSolutions extends Struct.ComponentSchema {
  collectionName: 'components_home_solutions';
  info: {
    displayName: 'solutions';
  };
  attributes: {
    items: Schema.Attribute.Component<'home.solution-item', true>;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface HomeVisionItem extends Struct.ComponentSchema {
  collectionName: 'components_home_vision_items';
  info: {
    displayName: 'VisionItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface HomeVisionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_vision_sections';
  info: {
    displayName: 'VisionSection';
  };
  attributes: {
    fallbackImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'home.vision-item', true>;
    videoLink: Schema.Attribute.String;
  };
}

export interface LeadershipLeadershipcard extends Struct.ComponentSchema {
  collectionName: 'components_leadership_leadershipcards';
  info: {
    displayName: 'leadershipcard';
  };
  attributes: {
    about: Schema.Attribute.Component<'shared.text', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface LeadershipLeadershiptab extends Struct.ComponentSchema {
  collectionName: 'components_leadership_leadershiptabs';
  info: {
    displayName: 'leadershiptab';
  };
  attributes: {
    cards: Schema.Attribute.Component<'leadership.leadershipcard', true>;
    title: Schema.Attribute.String;
  };
}

export interface MediaArticlecard extends Struct.ComponentSchema {
  collectionName: 'components_media_articlecards';
  info: {
    displayName: 'articlecard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'News'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface NavigationBottomSection extends Struct.ComponentSchema {
  collectionName: 'components_navigation_bottom_sections';
  info: {
    displayName: 'BottomSection';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigationMenu: Schema.Attribute.Component<
      'navigation.navigation-item',
      true
    >;
  };
}

export interface NavigationNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_items';
  info: {
    displayName: 'NavigationItem';
  };
  attributes: {
    link: Schema.Attribute.String;
    options: Schema.Attribute.Component<'navigation.sub-menu', false>;
    title: Schema.Attribute.Component<'elements.title', false>;
  };
}

export interface NavigationSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menus';
  info: {
    displayName: 'SubMenu';
  };
  attributes: {
    mainOptions: Schema.Attribute.Component<'navigation.sub-menu-item', true>;
    optionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationSubMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menu_items';
  info: {
    displayName: 'SubMenuItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    others: Schema.Attribute.Component<'navigation.sub-menu-link', true>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavigationSubMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menu_links';
  info: {
    displayName: 'SubMenuLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationTopSection extends Struct.ComponentSchema {
  collectionName: 'components_navigation_top_sections';
  info: {
    displayName: 'TopSection';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'elements.link', true>;
    links: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface ReportsCard extends Struct.ComponentSchema {
  collectionName: 'components_reports_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ReportsReportTabs extends Struct.ComponentSchema {
  collectionName: 'components_reports_report_tabs';
  info: {
    displayName: 'Report Tab';
  };
  attributes: {
    cards: Schema.Attribute.Component<'reports.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAccordion extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProductSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_sections';
  info: {
    displayName: 'descriptioncards';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'shared.accordion', true>;
    buttontext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shared.text', true>;
    sectionId: Schema.Attribute.String & Schema.Attribute.Unique;
    type: Schema.Attribute.Enumeration<['text', 'list']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.listitem': AboutListitem;
      'about.perks': AboutPerks;
      'about.statscard': AboutStatscard;
      'contact-us-page.contact-form': ContactUsPageContactForm;
      'contact-us-page.location-card': ContactUsPageLocationCard;
      'contact-us-page.location-section': ContactUsPageLocationSection;
      'contact-us-page.quick-action-card': ContactUsPageQuickActionCard;
      'contact-us-page.quick-actions': ContactUsPageQuickActions;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.title': ElementsTitle;
      'footer.download-app': FooterDownloadApp;
      'footer.footer-content': FooterFooterContent;
      'footer.footer-details': FooterFooterDetails;
      'footer.footer-option': FooterFooterOption;
      'footer.socials-item': FooterSocialsItem;
      'header.header-content': HeaderHeaderContent;
      'home.action-item': HomeActionItem;
      'home.ai-assitant': HomeAiAssitant;
      'home.ethical-solution': HomeEthicalSolution;
      'home.ethical-solution-item': HomeEthicalSolutionItem;
      'home.quick-actions': HomeQuickActions;
      'home.solution-item': HomeSolutionItem;
      'home.solutions': HomeSolutions;
      'home.vision-item': HomeVisionItem;
      'home.vision-section': HomeVisionSection;
      'leadership.leadershipcard': LeadershipLeadershipcard;
      'leadership.leadershiptab': LeadershipLeadershiptab;
      'media.articlecard': MediaArticlecard;
      'navigation.bottom-section': NavigationBottomSection;
      'navigation.navigation-item': NavigationNavigationItem;
      'navigation.sub-menu': NavigationSubMenu;
      'navigation.sub-menu-item': NavigationSubMenuItem;
      'navigation.sub-menu-link': NavigationSubMenuLink;
      'navigation.top-section': NavigationTopSection;
      'reports.card': ReportsCard;
      'reports.report-tabs': ReportsReportTabs;
      'shared.accordion': SharedAccordion;
      'shared.media': SharedMedia;
      'shared.product-section': SharedProductSection;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
