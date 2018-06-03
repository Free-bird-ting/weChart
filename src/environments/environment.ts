// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  env: 'dev',
  // path: 'http://test.emm.snsprj.cn:8080', // 跨域请求 --
  path: 'http://192.168.2.44:8080/tenant-management', // 跨域请求 --
  staticPath: '',
  production: false,
  api_changeable: true,
  deployPath: '.',
  mock: false
};
