const AWS = require('aws-sdk');
const { Command } = require('commander');

const program = new Command();
program
  .option('-i, --id <type>', 'CloudFront distribution ID')
  .option('-p, --path <type>', 'Invalidation path');
program.parse(process.argv);
const { id, path } = program.opts();

if (!id || !path) {
  console.log('Both --id and --path are required');
  process.exit(1);
}

function createInvalidation(distributionId, path) {
  const cloudfront = new AWS.CloudFront();
  const params = {
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: String(new Date().getTime()),
      Paths: {
        Quantity: 1,
        Items: [path],
      },
    },
  };
  return new Promise((resolve, reject) => {
    cloudfront.createInvalidation(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function invalidate(id, path) {
  createInvalidation(id, path)
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

console.log(`Invalidating the path "${path}" on distribution ID ${id}`);
invalidate(id, path);
