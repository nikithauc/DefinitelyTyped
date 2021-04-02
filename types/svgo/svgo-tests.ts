import { extendDefaultPlugins, loadConfig, optimize, OptimizedSvg, OptimizeOptions, Plugin } from 'svgo';

// Various optimize options
let optimized: OptimizedSvg;
optimized = optimize('');
optimized = optimize('', {});
optimized = optimize('', { plugins: [] });
optimized = optimize('', { datauri: 'base64' });
optimized = optimize('', { floatPrecision: 2 });
optimized = optimize('', { full: true });
optimized = optimize('', { multipass: true });
optimized = optimize('', {
    plugins: [
        'addAttributesToSVGElement',
        'addClassesToSVGElement',
        'cleanupAttrs',
        'cleanupEnableBackground',
        'cleanupIDs',
        'cleanupListOfValues',
        'cleanupNumericValues',
        'collapseGroups',
        'convertColors',
        'convertEllipseToCircle',
        'convertPathData',
        'convertShapeToPath',
        'convertStyleToAttrs',
        'convertTransform',
        'inlineStyles',
        'mergePaths',
        'mergeStyles',
        'minifyStyles',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'prefixIds',
        'removeAttributesBySelector',
        'removeAttrs',
        'removeComments',
        'removeDesc',
        'removeDimensions',
        'removeDoctype',
        'removeEditorsNSData',
        'removeElementsByAttr',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'removeEmptyText',
        'removeHiddenElems',
        'removeMetadata',
        'removeNonInheritableGroupAttrs',
        'removeOffCanvasPaths',
        'removeRasterImages',
        'removeScriptElement',
        'removeStyleElement',
        'removeTitle',
        'removeUnknownsAndDefaults',
        'removeUnusedNS',
        'removeUselessDefs',
        'removeUselessStrokeAndFill',
        'removeViewBox',
        'removeXMLNS',
        'removeXMLProcInst',
        'reusePaths',
        'sortAttrs',
        'sortDefsChildren',

        { name: 'addAttributesToSVGElement' },
        { name: 'addClassesToSVGElement' },
        { name: 'cleanupAttrs' },
        { name: 'cleanupEnableBackground' },
        { name: 'cleanupIDs' },
        { name: 'cleanupListOfValues' },
        { name: 'cleanupNumericValues' },
        { name: 'collapseGroups' },
        { name: 'convertColors' },
        { name: 'convertEllipseToCircle' },
        { name: 'convertPathData' },
        { name: 'convertShapeToPath' },
        { name: 'convertStyleToAttrs' },
        { name: 'convertTransform' },
        { name: 'inlineStyles' },
        { name: 'mergePaths' },
        { name: 'mergeStyles' },
        { name: 'minifyStyles' },
        { name: 'moveElemsAttrsToGroup' },
        { name: 'moveGroupAttrsToElems' },
        { name: 'prefixIds' },
        { name: 'removeAttributesBySelector' },
        { name: 'removeAttrs' },
        { name: 'removeComments' },
        { name: 'removeDesc' },
        { name: 'removeDimensions' },
        { name: 'removeDoctype' },
        { name: 'removeEditorsNSData' },
        { name: 'removeElementsByAttr' },
        { name: 'removeEmptyAttrs' },
        { name: 'removeEmptyContainers' },
        { name: 'removeEmptyText' },
        { name: 'removeHiddenElems' },
        { name: 'removeMetadata' },
        { name: 'removeNonInheritableGroupAttrs' },
        { name: 'removeOffCanvasPaths' },
        { name: 'removeRasterImages' },
        { name: 'removeScriptElement' },
        { name: 'removeStyleElement' },
        { name: 'removeTitle' },
        { name: 'removeUnknownsAndDefaults' },
        { name: 'removeUnusedNS' },
        { name: 'removeUselessDefs' },
        { name: 'removeUselessStrokeAndFill' },
        { name: 'removeViewBox' },
        { name: 'removeXMLNS' },
        { name: 'removeXMLProcInst' },
        { name: 'reusePaths' },
        { name: 'sortAttrs' },
        { name: 'sortDefsChildren' },
        { name: 'addAttributesToSVGElement' },
        { name: 'addClassesToSVGElement' },

        { active: true, name: 'addAttributesToSVGElement' },
        { active: false, name: 'addClassesToSVGElement' },

        { name: 'cleanupAttrs', params: { newlines: true, trim: true, spaces: true } },
        { name: 'cleanupEnableBackground' },
        {
            name: 'cleanupIDs',
            params: { remove: true, minify: true, prefix: '', preserve: [], preservePrefixes: [], force: false },
        },
        {
            name: 'cleanupListOfValues',
            params: { floatPrecision: 3, leadingZero: true, defaultPx: true, convertToPx: true },
        },
        {
            name: 'cleanupNumericValues',
            params: { floatPrecision: 3, leadingZero: true, defaultPx: true, convertToPx: true },
        },
        { name: 'collapseGroups' },
        {
            name: 'convertColors',
            params: { currentColor: false, names2hex: true, rgb2hex: true, shorthex: true, shortname: true },
        },
        { name: 'convertEllipseToCircle' },
        {
            name: 'convertPathData',
            params: {
                applyTransforms: true,
                applyTransformsStroked: true,
                makeArcs: { threshold: 2.5, tolerance: 0.5 },
                straightCurves: true,
                lineShorthands: true,
                curveSmoothShorthands: true,
                floatPrecision: 3,
                transformPrecision: 5,
                removeUseless: true,
                collapseRepeated: true,
                utilizeAbsolute: true,
                leadingZero: true,
                negativeExtraSpace: true,
                noSpaceAfterFlags: false,
                forceAbsolutePath: false,
            },
        },
        { name: 'convertShapeToPath', params: { convertArcs: false } },
        { name: 'convertStyleToAttrs', params: { keepImportant: false } },
        {
            name: 'convertTransform',
            params: {
                convertToShorts: true,
                floatPrecision: 3,
                transformPrecision: 5,
                matrixToTransform: true,
                shortTranslate: true,
                shortScale: true,
                shortRotate: true,
                removeUseless: true,
                collapseIntoOne: true,
                leadingZero: true,
                negativeExtraSpace: false,
            },
        },
        {
            name: 'inlineStyles',
            params: { onlyMatchedOnce: true, removeMatchedSelectors: true, useMqs: ['', 'screen'], usePseudos: [''] },
        },
        {
            name: 'mergePaths',
            params: {
                collapseRepeated: true,
                force: false,
                leadingZero: true,
                negativeExtraSpace: true,
                noSpaceAfterFlags: false,
            },
        },
        {
            name: 'mergeStyles',
        },
        { name: 'minifyStyles', params: { usage: { force: false, ids: true, classes: true, tags: true } } },
        { name: 'moveElemsAttrsToGroup' },
        { name: 'moveGroupAttrsToElems' },
        { name: 'prefixIds', params: { delim: '__', prefixIds: true, prefixClassNames: true } },
        { name: 'removeAttributesBySelector' },
        { name: 'removeAttrs', params: { elemSeparator: ':', preserveCurrentColor: false, attrs: [] } },
        { name: 'removeComments' },
        { name: 'removeDesc', params: { removeAny: true } },
        { name: 'removeDimensions' },
        { name: 'removeDoctype' },
        { name: 'removeEditorsNSData', params: { additionalNamespaces: [] } },
        { name: 'removeElementsByAttr', params: { id: [], class: [] } },
        { name: 'removeEmptyAttrs' },
        { name: 'removeEmptyContainers' },
        { name: 'removeEmptyText', params: { text: true, tspan: true, tref: true } },
        {
            name: 'removeHiddenElems',
            params: {
                isHidden: true,
                displayNone: true,
                opacity0: true,
                circleR0: true,
                ellipseRX0: true,
                ellipseRY0: true,
                rectWidth0: true,
                rectHeight0: true,
                patternWidth0: true,
                patternHeight0: true,
                imageWidth0: true,
                imageHeight0: true,
                pathEmptyD: true,
                polylineEmptyPoints: true,
                polygonEmptyPoints: true,
            },
        },
        { name: 'removeMetadata' },
        { name: 'removeNonInheritableGroupAttrs' },
        { name: 'removeOffCanvasPaths' },
        { name: 'removeRasterImages' },
        { name: 'removeScriptElement' },
        { name: 'removeStyleElement' },
        { name: 'removeTitle' },
        {
            name: 'removeUnknownsAndDefaults',
            params: {
                unknownContent: true,
                unknownAttrs: true,
                defaultAttrs: true,
                uselessOverrides: true,
                keepDataAttrs: true,
                keepAriaAttrs: true,
                keepRoleAttr: false,
            },
        },
        { name: 'removeUnusedNS' },
        { name: 'removeUselessDefs' },
        {
            name: 'removeUselessStrokeAndFill',
            params: { stroke: true, fill: true, removeNone: false, hasStyleOrScript: false },
        },
        { name: 'removeViewBox' },
        { name: 'removeXMLNS' },
        { name: 'removeXMLProcInst' },
        { name: 'reusePaths' },
        {
            name: 'sortAttrs',
            params: {
                order: [
                    'id',
                    'width',
                    'height',
                    'x',
                    'x1',
                    'x2',
                    'y',
                    'y1',
                    'y2',
                    'cx',
                    'cy',
                    'r',
                    'fill',
                    'stroke',
                    'marker',
                    'd',
                    'points',
                ],
            },
        },
        { name: 'sortDefsChildren' },
    ],
});

// SVGO options
const options: OptimizeOptions = {
    plugins: [],
    datauri: 'enc',
    floatPrecision: 2,
    full: true,
    js2svg: {
        indent: 2,
        pretty: true,
    },
    svg2js: {
        trim: true,
    },
};

optimize('', options);

declare const plugins: Plugin[];
optimize('', { plugins: extendDefaultPlugins(plugins) });

// $ExpectType Promise<OptimizeOptions>
loadConfig('foo.js');
// $ExpectType Promise<OptimizeOptions>
loadConfig('foo.js', '/home/user');
