import { AwsStack } from '@dinghy/tf-aws'
import { CloudfrontSites } from '@dinghy/tf-aws/cloudfront'

export default () => (
  <AwsStack>
    <CloudfrontSites />
  </AwsStack>
)
