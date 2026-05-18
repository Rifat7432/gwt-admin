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
      'home.tech-stack-section': HomeTechStackSection;
      'home.testimonial-section': HomeTestimonialSection;
      'industrie-details.details': IndustrieDetailsDetails;
    }
  }
}
