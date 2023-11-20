import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from '@sisense/sdk-data';

export const DataSource = 'cxp_analytics_cube';

interface attribute_translationDimension extends Dimension {
  attribute: Attribute;
  attributeTable: Attribute;
  attributeType: Attribute;
  language: Attribute;
  translation: Attribute;
}
export const attribute_translation = createDimension({
  name: 'attribute_translation',
  attribute: createAttribute({
    name: 'attribute',
    type: 'text-attribute',
    expression: '[attribute_translation.attribute]',
  }),
  attributeTable: createAttribute({
    name: 'attributeTable',
    type: 'text-attribute',
    expression: '[attribute_translation.attributeTable]',
  }),
  attributeType: createAttribute({
    name: 'attributeType',
    type: 'text-attribute',
    expression: '[attribute_translation.attributeType]',
  }),
  language: createAttribute({
    name: 'language',
    type: 'text-attribute',
    expression: '[attribute_translation.language]',
  }),
  translation: createAttribute({
    name: 'translation',
    type: 'text-attribute',
    expression: '[attribute_translation.translation]',
  }),
}) as attribute_translationDimension;

export const Competitor = createDimension({
  name: 'Competitor',
  ConcatKey: createAttribute({
    name: 'ConcatKey',
    type: 'text-attribute',
    expression: '[Competitor.ConcatKey]',
  }),
}) as Dimension;

interface dim_competitor_with_own_entityDimension extends Dimension {
  competitor_id: Attribute;
  entity_id: Attribute;
  entity_name: Attribute;
  is_competitor: Attribute;
  is_competitor_int: Attribute;
  is_competitor_str: Attribute;
  organization_id: Attribute;
}
export const dim_competitor_with_own_entity = createDimension({
  name: 'dim_competitor_with_own_entity',
  competitor_id: createAttribute({
    name: 'competitor_id',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.competitor_id]',
  }),
  entity_id: createAttribute({
    name: 'entity_id',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.entity_id]',
  }),
  entity_name: createAttribute({
    name: 'entity_name',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.entity_name]',
  }),
  is_competitor: createAttribute({
    name: 'is_competitor',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.is_competitor]',
  }),
  is_competitor_int: createAttribute({
    name: 'is_competitor_int',
    type: 'numeric-attribute',
    expression: '[dim_competitor_with_own_entity.is_competitor_int]',
  }),
  is_competitor_str: createAttribute({
    name: 'is_competitor_str',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.is_competitor_str]',
  }),
  organization_id: createAttribute({
    name: 'organization_id',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.organization_id]',
  }),
}) as dim_competitor_with_own_entityDimension;
export const dim_date = createDimension({
  name: 'dim_date',
  date: createDateDimension({
    name: 'date',
    expression: '[dim_date.date (Calendar)]',
  }),
}) as Dimension;

interface dim_entityDimension extends Dimension {
  brand: Attribute;
  dim_entity_name: Attribute;
}
export const dim_entity = createDimension({
  name: 'dim_entity',
  brand: createAttribute({
    name: 'brand',
    type: 'text-attribute',
    expression: '[dim_entity.brand]',
  }),
  dim_entity_name: createAttribute({
    name: 'dim_entity_name',
    type: 'text-attribute',
    expression: '[dim_entity.name]',
  }),
}) as dim_entityDimension;

interface dim_locationDimension extends Dimension {
  city: Attribute;
  country: Attribute;
  region: Attribute;
}
export const dim_location = createDimension({
  name: 'dim_location',
  city: createAttribute({
    name: 'city',
    type: 'text-attribute',
    expression: '[dim_location.city]',
  }),
  country: createAttribute({
    name: 'country',
    type: 'text-attribute',
    expression: '[dim_location.country]',
  }),
  region: createAttribute({
    name: 'region',
    type: 'text-attribute',
    expression: '[dim_location.region]',
  }),
}) as dim_locationDimension;

export const dim_review_provider = createDimension({
  name: 'dim_review_provider',
  review_provider_name: createAttribute({
    name: 'review_provider_name',
    type: 'text-attribute',
    expression: '[dim_review_provider.review_provider_name]',
  }),
}) as Dimension;

export const dim_sector = createDimension({
  name: 'dim_sector',
  dim_sector_name: createAttribute({
    name: 'dim_sector_name',
    type: 'text-attribute',
    expression: '[dim_sector.name]',
  }),
}) as Dimension;

interface dim_user_scopesDimension extends Dimension {
  ConcatKey: Attribute;
  is_competitor: Attribute;
  organization_id: Attribute;
  scope_id: Attribute;
}
export const dim_user_scopes = createDimension({
  name: 'dim_user_scopes',
  ConcatKey: createAttribute({
    name: 'ConcatKey',
    type: 'text-attribute',
    expression: '[dim_user_scopes.ConcatKey]',
  }),
  is_competitor: createAttribute({
    name: 'is_competitor',
    type: 'text-attribute',
    expression: '[dim_user_scopes.is_competitor]',
  }),
  organization_id: createAttribute({
    name: 'organization_id',
    type: 'text-attribute',
    expression: '[dim_user_scopes.organization_id]',
  }),
  scope_id: createAttribute({
    name: 'scope_id',
    type: 'text-attribute',
    expression: '[dim_user_scopes.scope_id]',
  }),
}) as dim_user_scopesDimension;

interface fact_reviewDimension extends Dimension {
  entity_id: Attribute;
  location_id: Attribute;
  respondable: Attribute;
  respondable_int: Attribute;
  responded: Attribute;
  responded_int: Attribute;
  review_id: Attribute;
  review_provider_id: Attribute;
  score: Attribute;
  sector_id: Attribute;
  created_at: DateDimension;
  date: DateDimension;
}
export const fact_review = createDimension({
  name: 'fact_review',
  entity_id: createAttribute({
    name: 'entity_id',
    type: 'text-attribute',
    expression: '[fact_review.entity_id]',
  }),
  location_id: createAttribute({
    name: 'location_id',
    type: 'text-attribute',
    expression: '[fact_review.location_id]',
  }),
  respondable: createAttribute({
    name: 'respondable',
    type: 'text-attribute',
    expression: '[fact_review.respondable]',
  }),
  respondable_int: createAttribute({
    name: 'respondable_int',
    type: 'numeric-attribute',
    expression: '[fact_review.respondable_int]',
  }),
  responded: createAttribute({
    name: 'responded',
    type: 'text-attribute',
    expression: '[fact_review.responded]',
  }),
  responded_int: createAttribute({
    name: 'responded_int',
    type: 'numeric-attribute',
    expression: '[fact_review.responded_int]',
  }),
  review_id: createAttribute({
    name: 'review_id',
    type: 'text-attribute',
    expression: '[fact_review.review_id]',
  }),
  review_provider_id: createAttribute({
    name: 'review_provider_id',
    type: 'text-attribute',
    expression: '[fact_review.review_provider_id]',
  }),
  score: createAttribute({
    name: 'score',
    type: 'numeric-attribute',
    expression: '[fact_review.score]',
  }),
  sector_id: createAttribute({
    name: 'sector_id',
    type: 'text-attribute',
    expression: '[fact_review.sector_id]',
  }),
  created_at: createDateDimension({
    name: 'created_at',
    expression: '[fact_review.created_at (Calendar)]',
  }),
  date: createDateDimension({
    name: 'date',
    expression: '[fact_review.date (Calendar)]',
  }),
}) as fact_reviewDimension;

interface fact_trustyou_scoreDimension extends Dimension {
  entity_id: Attribute;
  location_id: Attribute;
  sector_id: Attribute;
  trustyou_score: Attribute;
}
export const fact_trustyou_score = createDimension({
  name: 'fact_trustyou_score',
  entity_id: createAttribute({
    name: 'entity_id',
    type: 'text-attribute',
    expression: '[fact_trustyou_score.entity_id]',
  }),
  location_id: createAttribute({
    name: 'location_id',
    type: 'text-attribute',
    expression: '[fact_trustyou_score.location_id]',
  }),
  sector_id: createAttribute({
    name: 'sector_id',
    type: 'text-attribute',
    expression: '[fact_trustyou_score.sector_id]',
  }),
  trustyou_score: createAttribute({
    name: 'trustyou_score',
    type: 'numeric-attribute',
    expression: '[fact_trustyou_score.trustyou_score]',
  }),
}) as fact_trustyou_scoreDimension;

interface general_org_segmentsDimension extends Dimension {
  segment1: Attribute;
  segment2: Attribute;
}
export const general_org_segments = createDimension({
  name: 'general_org_segments',
  segment1: createAttribute({
    name: 'segment1',
    type: 'text-attribute',
    expression: '[general_org_segments.segment1]',
  }),
  segment2: createAttribute({
    name: 'segment2',
    type: 'text-attribute',
    expression: '[general_org_segments.segment2]',
  }),
}) as general_org_segmentsDimension;

interface sema_categories_hierarchyDimension extends Dimension {
  aspect: Attribute;
  language: Attribute;
  quality: Attribute;
  sector_id: Attribute;
  top_level: Attribute;
  topic_id: Attribute;
}
export const sema_categories_hierarchy = createDimension({
  name: 'sema_categories_hierarchy',
  aspect: createAttribute({
    name: 'aspect',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.aspect]',
  }),
  language: createAttribute({
    name: 'language',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.language]',
  }),
  quality: createAttribute({
    name: 'quality',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.quality]',
  }),
  sector_id: createAttribute({
    name: 'sector_id',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.sector_id]',
  }),
  top_level: createAttribute({
    name: 'top_level',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.top_level]',
  }),
  topic_id: createAttribute({
    name: 'topic_id',
    type: 'text-attribute',
    expression: '[sema_categories_hierarchy.topic_id]',
  }),
}) as sema_categories_hierarchyDimension;

interface testDimension extends Dimension {
  entity_name: Attribute;
  score: Attribute;
  country: Attribute;
}

export const test = createDimension({
  name: 'test',
  entity_name: createAttribute({
    name: 'entity_name',
    type: 'text-attribute',
    expression: '[dim_competitor_with_own_entity.entity_name]',
  }),
  score: createAttribute({
    name: 'score',
    type: 'numeric-attribute',
    expression: '[fact_review.score]',
  }),
  country: createAttribute({
    name: 'country',
    type: 'text-attribute',
    expression: '[dim_location.country]',
  }),
}) as testDimension;