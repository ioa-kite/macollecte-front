import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
/* wwFront:start */
import plugincabb43dd616141408ebf03b6fb045a0b from '@/components/plugins/plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b/ww-config.js';
import plugin832d6f7a42c343f1a3ce9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js';
import plugin69d4a5bb09a34f3da94e667c21c057eb from '@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/ww-config.js';
import pluginf5856798485d47beb433d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js';
import plugin2bd1c68831c5443eae2559aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js';
import plugincd33cf33e29f4e8cac26b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js';
import pluginee24f5ace15e4dddbaa40b4baedf90c9 from '@/components/plugins/plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9/ww-config.js';
import plugin9c40819b4a8f468f9ba54b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js';
import section99586bd32b154d6ba0256a50d07ca845 from '@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js';
import sectionef0ecc719a594eab94b0b36d66d3d61d from '@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js';
import wwobject2d18ef4ce9e54dc6a29d01d9f797be5e from '@/components/elements/element-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e/ww-config.js';
import wwobject734633a1457d4fe59eaa773dddc755f1 from '@/components/elements/element-734633a1-457d-4fe5-9eaa-773dddc755f1/ww-config.js';
import wwobjectaeb78b9a6fb64c49931dfaedcfad67ba from '@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js';
import wwobjectfd8c482f532c4aeba7ae6904a6b62a1b from '@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js';
import wwobject9011acf97581462293807711b1257de4 from '@/components/elements/element-9011acf9-7581-4622-9380-7711b1257de4/ww-config.js';
import wwobject99ea5bf7b91e43ea8ec3dbaf2b171e34 from '@/components/elements/element-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34/ww-config.js';
import wwobject0dc461bb103e4b2e80e0846ec3c30a6e from '@/components/elements/element-0dc461bb-103e-4b2e-80e0-846ec3c30a6e/ww-config.js';
import wwobject0d3e75d19e7744cba2728b0825fbc5da from '@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js';
import wwobject69d0b3efb265494c8cd1874da4aa1834 from '@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js';
import wwobject83d890fb84f94386b459fb4be89a8e15 from '@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js';
import wwobject6ba133b6a444414f93a525cd237dd398 from '@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js';
import wwobjectaf811adf94d949ddab22e2f29ae30299 from '@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js';
import wwobject6f8796b18273498d95fc7013b7c63214 from '@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js';
import wwobject88ef76b646d54685878f2f1fa0d54cb8 from '@/components/elements/element-88ef76b6-46d5-4685-878f-2f1fa0d54cb8/ww-config.js';
import wwobject9256b033f4e84ab4adcedac3a940d7f5 from '@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js';
import wwobjectd7904e9dfc9a4d809e32728e097879ad from '@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js';
import wwobject7179ba70c5d749a59828f85704fd1efc from '@/components/elements/element-7179ba70-c5d7-49a5-9828-f85704fd1efc/ww-config.js';
import wwobject9202d35c281345bca7f30adb85f83e5e from '@/components/elements/element-9202d35c-2813-45bc-a7f3-0adb85f83e5e/ww-config.js';
import wwobject2fd375f8f5c74d81881ddacd40bc0ad3 from '@/components/elements/element-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3/ww-config.js';
import wwobjectaa27b26f06864c2998c58217044045b7 from '@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js';
import wwobject2dff59573bd846f9afa3a5c5bab91931 from '@/components/elements/element-2dff5957-3bd8-46f9-afa3-a5c5bab91931/ww-config.js';
import wwobject3a7d637912d3438798ffb332bb492a63 from '@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js';
import wwobjectb783dc65d5284f748c14e27c934c39b1 from '@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js';
import wwobjectf4c24d06bc884b62add34d1f8b42221c from '@/components/elements/element-f4c24d06-bc88-4b62-add3-4d1f8b42221c/ww-config.js';
import wwobject53401515b6944c79a88dabeecb1de562 from '@/components/elements/element-53401515-b694-4c79-a88d-abeecb1de562/ww-config.js';
import wwobject18998884a7574a8780fe44f129cf0962 from '@/components/elements/element-18998884-a757-4a87-80fe-44f129cf0962/ww-config.js';
import wwobjecta4a2089fb75d4e269c990d67fb7bd3cd from '@/components/elements/element-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd/ww-config.js';
import wwobject5a88036f22ea4f8db4a5bc226ef95061 from '@/components/elements/element-5a88036f-22ea-4f8d-b4a5-bc226ef95061/ww-config.js';
import wwobject6d692ca26cdc4805aa0c211102f335d0 from '@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js';
import wwobject1b1e21739b7842cca8eea6167caea340 from '@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js';
import wwobject97a634605c254d74ac1f86693c2e4a08 from '@/components/elements/element-97a63460-5c25-4d74-ac1f-86693c2e4a08/ww-config.js';
import wwobjectaa29a66107ce484e8abb456186211282 from '@/components/elements/element-aa29a661-07ce-484e-8abb-456186211282/ww-config.js';
import wwobject57831abf83ad49adba973bd30b035710 from '@/components/elements/element-57831abf-83ad-49ad-ba97-3bd30b035710/ww-config.js';
import wwobject59dca300db7842e4a7a60cbf22d3cc82 from '@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js';
import wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65 from '@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js';
import wwobjectdeb10a015eef4aa190171b51c2ad6fd0 from '@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js';
import wwobject9ae1fce82e314bfda4d20450235bdfd5 from '@/components/elements/element-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5/ww-config.js';
import wwobjectc6c0c00e49fd4cb9bd785bc09945721e from '@/components/elements/element-c6c0c00e-49fd-4cb9-bd78-5bc09945721e/ww-config.js';
import wwobject9896d6950c964a0fb587c25e879ece77 from '@/components/elements/element-9896d695-0c96-4a0f-b587-c25e879ece77/ww-config.js';
import wwobject985570fcb3c04566800482ab3b30a11d from '@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js';
/* wwFront:end */

export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b': getInheritedConfiguration({ ...plugincabb43dd616141408ebf03b6fb045a0b, name: 'plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...plugin832d6f7a42c343f1a3ce9a678272f811, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb': getInheritedConfiguration({ ...plugin69d4a5bb09a34f3da94e667c21c057eb, name: 'plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb' }),
'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...pluginf5856798485d47beb433d43d771c64e1, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...plugin2bd1c68831c5443eae2559aa5b6431fb, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...plugincd33cf33e29f4e8cac26b997fe507ce7, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9': getInheritedConfiguration({ ...pluginee24f5ace15e4dddbaa40b4baedf90c9, name: 'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...plugin9c40819b4a8f468f9ba54b9699f3361f, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...section99586bd32b154d6ba0256a50d07ca845, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...sectionef0ecc719a594eab94b0b36d66d3d61d, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e': getInheritedConfiguration({ ...wwobject2d18ef4ce9e54dc6a29d01d9f797be5e, name: 'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e' }),
'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1': getInheritedConfiguration({ ...wwobject734633a1457d4fe59eaa773dddc755f1, name: 'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...wwobjectaeb78b9a6fb64c49931dfaedcfad67ba, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...wwobjectfd8c482f532c4aeba7ae6904a6b62a1b, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-9011acf9-7581-4622-9380-7711b1257de4': getInheritedConfiguration({ ...wwobject9011acf97581462293807711b1257de4, name: 'wwobject-9011acf9-7581-4622-9380-7711b1257de4' }),
'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34': getInheritedConfiguration({ ...wwobject99ea5bf7b91e43ea8ec3dbaf2b171e34, name: 'wwobject-99ea5bf7-b91e-43ea-8ec3-dbaf2b171e34' }),
'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e': getInheritedConfiguration({ ...wwobject0dc461bb103e4b2e80e0846ec3c30a6e, name: 'wwobject-0dc461bb-103e-4b2e-80e0-846ec3c30a6e' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...wwobject0d3e75d19e7744cba2728b0825fbc5da, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...wwobject69d0b3efb265494c8cd1874da4aa1834, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...wwobject83d890fb84f94386b459fb4be89a8e15, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...wwobject6ba133b6a444414f93a525cd237dd398, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...wwobjectaf811adf94d949ddab22e2f29ae30299, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...wwobject6f8796b18273498d95fc7013b7c63214, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8': getInheritedConfiguration({ ...wwobject88ef76b646d54685878f2f1fa0d54cb8, name: 'wwobject-88ef76b6-46d5-4685-878f-2f1fa0d54cb8' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...wwobject9256b033f4e84ab4adcedac3a940d7f5, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...wwobjectd7904e9dfc9a4d809e32728e097879ad, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-7179ba70-c5d7-49a5-9828-f85704fd1efc': getInheritedConfiguration({ ...wwobject7179ba70c5d749a59828f85704fd1efc, name: 'wwobject-7179ba70-c5d7-49a5-9828-f85704fd1efc' }),
'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e': getInheritedConfiguration({ ...wwobject9202d35c281345bca7f30adb85f83e5e, name: 'wwobject-9202d35c-2813-45bc-a7f3-0adb85f83e5e' }),
'wwobject-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3': getInheritedConfiguration({ ...wwobject2fd375f8f5c74d81881ddacd40bc0ad3, name: 'wwobject-2fd375f8-f5c7-4d81-881d-dacd40bc0ad3' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...wwobjectaa27b26f06864c2998c58217044045b7, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931': getInheritedConfiguration({ ...wwobject2dff59573bd846f9afa3a5c5bab91931, name: 'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...wwobject3a7d637912d3438798ffb332bb492a63, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...wwobjectb783dc65d5284f748c14e27c934c39b1, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-f4c24d06-bc88-4b62-add3-4d1f8b42221c': getInheritedConfiguration({ ...wwobjectf4c24d06bc884b62add34d1f8b42221c, name: 'wwobject-f4c24d06-bc88-4b62-add3-4d1f8b42221c' }),
'wwobject-53401515-b694-4c79-a88d-abeecb1de562': getInheritedConfiguration({ ...wwobject53401515b6944c79a88dabeecb1de562, name: 'wwobject-53401515-b694-4c79-a88d-abeecb1de562' }),
'wwobject-18998884-a757-4a87-80fe-44f129cf0962': getInheritedConfiguration({ ...wwobject18998884a7574a8780fe44f129cf0962, name: 'wwobject-18998884-a757-4a87-80fe-44f129cf0962' }),
'wwobject-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd': getInheritedConfiguration({ ...wwobjecta4a2089fb75d4e269c990d67fb7bd3cd, name: 'wwobject-a4a2089f-b75d-4e26-9c99-0d67fb7bd3cd' }),
'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061': getInheritedConfiguration({ ...wwobject5a88036f22ea4f8db4a5bc226ef95061, name: 'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...wwobject6d692ca26cdc4805aa0c211102f335d0, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...wwobject1b1e21739b7842cca8eea6167caea340, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-97a63460-5c25-4d74-ac1f-86693c2e4a08': getInheritedConfiguration({ ...wwobject97a634605c254d74ac1f86693c2e4a08, name: 'wwobject-97a63460-5c25-4d74-ac1f-86693c2e4a08' }),
'wwobject-aa29a661-07ce-484e-8abb-456186211282': getInheritedConfiguration({ ...wwobjectaa29a66107ce484e8abb456186211282, name: 'wwobject-aa29a661-07ce-484e-8abb-456186211282' }),
'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710': getInheritedConfiguration({ ...wwobject57831abf83ad49adba973bd30b035710, name: 'wwobject-57831abf-83ad-49ad-ba97-3bd30b035710' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...wwobject59dca300db7842e4a7a60cbf22d3cc82, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...wwobjectdeb10a015eef4aa190171b51c2ad6fd0, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5': getInheritedConfiguration({ ...wwobject9ae1fce82e314bfda4d20450235bdfd5, name: 'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5' }),
'wwobject-c6c0c00e-49fd-4cb9-bd78-5bc09945721e': getInheritedConfiguration({ ...wwobjectc6c0c00e49fd4cb9bd785bc09945721e, name: 'wwobject-c6c0c00e-49fd-4cb9-bd78-5bc09945721e' }),
'wwobject-9896d695-0c96-4a0f-b587-c25e879ece77': getInheritedConfiguration({ ...wwobject9896d6950c964a0fb587c25e879ece77, name: 'wwobject-9896d695-0c96-4a0f-b587-c25e879ece77' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...wwobject985570fcb3c04566800482ab3b30a11d, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
