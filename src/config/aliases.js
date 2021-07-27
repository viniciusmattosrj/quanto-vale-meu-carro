const aliases = (prefix = 'src') => ({
    "@root": `${prefix}/`,
    "@components": `${prefix}/components`,
    "@modules": `${prefix}/modules`,
    "@routes": `${prefix}/routes`,
    "@services": `${prefix}/services`,
    "@utils": `${prefix}/utils`,
    "@config": `${prefix}/config`,
    "@styles": `${prefix}/styles`,
  });
  
  module.exports = aliases;