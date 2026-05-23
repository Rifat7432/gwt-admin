import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBannarSection extends Struct.ComponentSchema {
  collectionName: 'components_home_bannar_sections';
  info: {
    displayName: 'Bannar Section';
  };
  attributes: {
    bannarDescription: Schema.Attribute.Text;
    bannarIntroVideoUrl: Schema.Attribute.String;
    bannarRating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    bannarTitle: Schema.Attribute.String;
    bannarVideoUrl: Schema.Attribute.String;
    brandsImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    brandsTitle: Schema.Attribute.String;
  };
}

export interface HomeContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    contactDescription: Schema.Attribute.Text;
    contactDetails: Schema.Attribute.Component<
      'industrie-details.details',
      true
    >;
    contactSubTitle: Schema.Attribute.String;
    contactSupportEmail: Schema.Attribute.Email;
    contactTagline: Schema.Attribute.Text;
    contactTitle: Schema.Attribute.String;
  };
}

export interface HomeEngagementModelSection extends Struct.ComponentSchema {
  collectionName: 'components_home_engagement_model_sections';
  info: {
    displayName: 'Engagement Model Section';
  };
  attributes: {
    engagementModelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    engagementModelTitle: Schema.Attribute.String;
  };
}

export interface HomeImpactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_impact_sections';
  info: {
    displayName: 'Impact Section';
  };
  attributes: {
    impactSectionClientRetentionRate: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    impactSectionExperience: Schema.Attribute.Integer;
    impactSectionProjectsDelivered: Schema.Attribute.Integer;
    impactSectionTitle: Schema.Attribute.String;
    impactSectionUsersWorldwide: Schema.Attribute.Integer;
  };
}

export interface HomeIndustrySection extends Struct.ComponentSchema {
  collectionName: 'components_home_industry_sections';
  info: {
    displayName: 'Industry Section';
  };
  attributes: {
    industrySectionDetails: Schema.Attribute.Text;
    industrySectionTitle: Schema.Attribute.String;
  };
}

export interface HomeOnDemand extends Struct.ComponentSchema {
  collectionName: 'components_home_on_demands';
  info: {
    displayName: 'On Demand';
  };
  attributes: {
    onDemandDetails: Schema.Attribute.Component<
      'industrie-details.details',
      true
    >;
  };
}

export interface HomeSelectedWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_home_selected_work_sections';
  info: {
    displayName: 'Selected Work Section';
  };
  attributes: {
    selectedWorkTitle: Schema.Attribute.String;
    selectedWorkYears: Schema.Attribute.String;
  };
}

export interface HomeServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    serviceDiscripction: Schema.Attribute.Text;
    serviceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    services: Schema.Attribute.Component<'navbar.services', true>;
    serviceTagline: Schema.Attribute.Text;
    serviceTitle: Schema.Attribute.String;
  };
}

export interface HomeTechStackSection extends Struct.ComponentSchema {
  collectionName: 'components_home_tech_stack_sections';
  info: {
    displayName: 'Tech Stack Section';
  };
  attributes: {
    techStackDescription: Schema.Attribute.Text;
    techStackImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    techStackTechNumber: Schema.Attribute.Integer;
    techStackTitle: Schema.Attribute.String;
  };
}

export interface HomeTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    testimonialAverageRating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    testimonialSectionTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

export interface IndustrieDetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_industrie_details_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    details: Schema.Attribute.String;
  };
}

export interface NavbarApproach extends Struct.ComponentSchema {
  collectionName: 'components_navbar_approaches';
  info: {
    displayName: 'Approach';
  };
  attributes: {
    approachDescription: Schema.Attribute.Text;
    approachIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    approachTitle: Schema.Attribute.String;
  };
}

export interface NavbarIndustry extends Struct.ComponentSchema {
  collectionName: 'components_navbar_industries';
  info: {
    displayName: 'Industry';
  };
  attributes: {
    industryIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    industryTitle: Schema.Attribute.String;
  };
}

export interface NavbarServices extends Struct.ComponentSchema {
  collectionName: 'components_navbar_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    serviceDescription: Schema.Attribute.Text;
    serviceIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    serviceTitle: Schema.Attribute.String;
  };
}

export interface NavbarSolution extends Struct.ComponentSchema {
  collectionName: 'components_navbar_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    solutionIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    solutoinTitle: Schema.Attribute.String;
  };
}

export interface NavbarSolutionSidbar extends Struct.ComponentSchema {
  collectionName: 'components_navbar_solution_sidbars';
  info: {
    displayName: 'Solution Sidbar';
  };
  attributes: {
    solutionSdibarDescription: Schema.Attribute.Text;
    solutionSidbarTitle: Schema.Attribute.String;
  };
}

export interface ServiceBannarSection extends Struct.ComponentSchema {
  collectionName: 'components_service_bannar_sections';
  info: {
    displayName: 'Bannar Section';
  };
  attributes: {
    bannarBottomApproachDescription: Schema.Attribute.Text;
    bannarBottomTagline: Schema.Attribute.String;
    bannarDescription: Schema.Attribute.Text;
    bannarImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    BannarTag: Schema.Attribute.String;
    bannarTitle: Schema.Attribute.String;
    brandsImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    brandsTagline: Schema.Attribute.String;
    brandsTitle: Schema.Attribute.String;
  };
}

export interface ServiceChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_service_choose_us_sections';
  info: {
    displayName: 'Choose Us Section';
  };
  attributes: {
    chooseUsSectionData: Schema.Attribute.Component<
      'service.choose-us-section-data',
      true
    >;
    chooseUsSectionTag: Schema.Attribute.String;
    chooseUsSectionTitle: Schema.Attribute.String;
  };
}

export interface ServiceChooseUsSectionData extends Struct.ComponentSchema {
  collectionName: 'components_service_choose_us_section_data';
  info: {
    displayName: 'Choose Us Section Data';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceFaq extends Struct.ComponentSchema {
  collectionName: 'components_service_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ServiceFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_service_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    contactEmail: Schema.Attribute.Email;
    FAQDescription: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'service.faq', true>;
    FAQTag: Schema.Attribute.String;
    FAQTitle: Schema.Attribute.String;
  };
}

export interface ServiceOfferSection extends Struct.ComponentSchema {
  collectionName: 'components_service_offer_sections';
  info: {
    displayName: 'Offer Section';
  };
  attributes: {
    offerSectionBottomTagline: Schema.Attribute.String;
    offerSectionDescription: Schema.Attribute.Text;
    offerSectionTag: Schema.Attribute.String;
    offerSectionTitle: Schema.Attribute.String;
  };
}

export interface ServiceOurProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_service_our_process_sections';
  info: {
    displayName: 'Our Process Section';
  };
  attributes: {
    ourProcessBgImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ourProcessTag: Schema.Attribute.String;
    ourProcessTitle: Schema.Attribute.String;
    process: Schema.Attribute.Component<'service.process', true>;
    testimonial: Schema.Attribute.Relation<
      'oneToOne',
      'api::testimonial.testimonial'
    >;
  };
}

export interface ServiceProcess extends Struct.ComponentSchema {
  collectionName: 'components_service_processes';
  info: {
    displayName: 'process';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    processDescription: Schema.Attribute.Text;
    processTitle: Schema.Attribute.String;
  };
}

export interface ServiceSelectedWorks extends Struct.ComponentSchema {
  collectionName: 'components_service_selected_works';
  info: {
    displayName: 'Selected works';
  };
  attributes: {
    selectedWorkSectionData: Schema.Attribute.Component<
      'service.selected-works-data',
      true
    >;
    selectedWorkSectionTag: Schema.Attribute.String;
    selectedWorkSectionTitle: Schema.Attribute.String;
  };
}

export interface ServiceSelectedWorksData extends Struct.ComponentSchema {
  collectionName: 'components_service_selected_works_data';
  info: {
    displayName: 'Selected Works Data';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    impact: Schema.Attribute.String;
    impactDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.bannar-section': HomeBannarSection;
      'home.contact-section': HomeContactSection;
      'home.engagement-model-section': HomeEngagementModelSection;
      'home.impact-section': HomeImpactSection;
      'home.industry-section': HomeIndustrySection;
      'home.on-demand': HomeOnDemand;
      'home.selected-work-section': HomeSelectedWorkSection;
      'home.service-section': HomeServiceSection;
      'home.tech-stack-section': HomeTechStackSection;
      'home.testimonial-section': HomeTestimonialSection;
      'industrie-details.details': IndustrieDetailsDetails;
      'navbar.approach': NavbarApproach;
      'navbar.industry': NavbarIndustry;
      'navbar.services': NavbarServices;
      'navbar.solution': NavbarSolution;
      'navbar.solution-sidbar': NavbarSolutionSidbar;
      'service.bannar-section': ServiceBannarSection;
      'service.choose-us-section': ServiceChooseUsSection;
      'service.choose-us-section-data': ServiceChooseUsSectionData;
      'service.faq': ServiceFaq;
      'service.faq-section': ServiceFaqSection;
      'service.offer-section': ServiceOfferSection;
      'service.our-process-section': ServiceOurProcessSection;
      'service.process': ServiceProcess;
      'service.selected-works': ServiceSelectedWorks;
      'service.selected-works-data': ServiceSelectedWorksData;
    }
  }
}
