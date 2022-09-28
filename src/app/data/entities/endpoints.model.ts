const baseUrl: string = 'https://s3-eu-west-1.amazonaws.com/developer-application-test';

/**
 * API endpoints paths.
 */
export class Endpoints {
  public static ProductList: string = `${baseUrl}/cart/list`;

  public static ProductById(productId: string): string {
    return `${baseUrl}/cart/${ productId }/detail`;
  }
}
