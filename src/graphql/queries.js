export const listCategories = `query listListingSettingss(
  $filter: ModelListingSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listListingSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemName
      description
      isEnable
      typeId
    }
    nextToken
  }
}
`;