/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Text as Text, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Slot as Slot, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, List as List, ListItem as ListItem, Separator as Separator, CodeText as CodeText, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";


      export const projectId = "8b8ff051-82b3-4990-ab1e-3ca49a590526";

      export const lastPublished = "2025-05-16T12:48:33.817Z";

      export const siteName = "Webstudio Sample Site";

      export const breakpoints = [{"id":"vYSOdTOXxM6oqn5-m48bq"},{"id":"VJraIZNoZKGMiMuROaLjX","maxWidth":991},{"id":"Upc5EF-Y-YFkGeXyM0my3","maxWidth":767},{"id":"_XU5PFthO_B42NSeOs130","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box c15qvzfm cxvqghw`}>
<Box
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1u62tv4 czp85x0 cgsqhcf c1372nu4 c1wyqfmo c1ia31up c1xld2py`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
className={`w-heading c1jws19y c1o8kpn7 cynii78 c157gpv9 c1ks67gp cheo1gh`}>
{"Style Guide"}
</Heading>
<Slot>
<Fragment_1>
<Text
className={`w-text`}>
{"Version 1.2"}
</Text>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph c1uwdocz c1lbij8h`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1yq962v cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst c15qvzfm cxvqghw c1njsk1c c141vefa crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n czp85x0 cgsqhcf c185b91z c6725o5 c1ia31up c1xld2py crwlurz cw2w0hb c1u62tv4 c5hug53 cl85nye c1oidh7u c1xwd9uj cek2hwf cg8dfhg cmo417s`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft cgcyl9z coia1pi cnktlst crwlurz cw2w0hb c1u62tv4 civrck2 chn0zcz c1d60p8d csxd0iw cmo417s c15okf2c cltf5h c1p9y7kb`}>
<Box
className={`w-box c1ujnd83 cxvevt4`}>
<Text
className={`w-text c1498n7r cxfe546 c1c2zmm4 cnw4l8p c16lw8ma c1i0m27z c3wfnii cf3s0o8 cze55r6 c1uco24j cma8e43 c1g3zbab ctwzp8m cw2w0hb`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph c2tioub cuneir5`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c3ys3k cax1sfy c14p7bk2 cjkao7d cgareqf cakhfle c1ptbbu3 c1bo75c9`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c3ys3k cax1sfy c14p7bk2 cjkao7d cgareqf cakhfle c1ptbbu3 c1bo75c9`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading c110rp94 c1o8kpn7 cynii78 c157gpv9 c1a8kyq6`}>
{"Foreground"}
</Heading>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c1a8kyq6 cnyrhdk`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c1mjnacl cmo417s`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c130q6tg cnyrhdk`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c7b1rez cnyrhdk`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c1w009g6 cnyrhdk`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c110rp94 c1o8kpn7 cynii78 c157gpv9 c1a8kyq6`}>
{"Background"}
</Heading>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--background-primary"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg cqn8fan cmo417s`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg cidh5od cnyrhdk`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--background-accent"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c1s66gat cnyrhdk`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--background-card"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c2pmgzs cnyrhdk`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c110rp94 c1o8kpn7 cynii78 c157gpv9 c1a8kyq6`}>
{"Other"}
</Heading>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1ecy1p9 cnw4l8p c16lw8ma cc80dtp cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy cza6fh5`}>
{"--focus-color"}
</Text>
<Box
className={`w-box c1rzazty c47c2hl c8bdj38 c1jmw47e c9ijh7m c8m2pgq c171fpgg c2uyhw cnyrhdk`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n c1br3i3l cgsqhcf crwlurz cw2w0hb c1u62tv4 c1oiu8x9 c1j6b6hu cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"button-group"}
</Text>
<Box
className={`w-box ced5x4n cs9d7p7 cgsqhcf civrck2 chn0zcz c7uyjom`}>
<Link
className={`w-link c10y37j0 c72uqn5 cgw5519 cntdzcf cfjna3e c1315crt cphjdcr c1pt0zls c195mm2f c1t6jvq9 c1tkt9qq c11hnem6 cs9d7p7 cnktlst ckugv9c c1tn15a6 cf3s0o8 c1po6n8k c17mudhx c1ngnjys cqe8zx8 c1lcqypt c1qt6nqv c1okxjk7 cjzajcw cm26boj ck5khh cmasoy8 c1lgamaw`}>
{"button"}
</Link>
<Link
className={`w-link c1bnmnll c13io2ik cgw5519 cntdzcf cfjna3e c1315crt cphjdcr c1pt0zls c195mm2f c1t6jvq9 c1tkt9qq c11hnem6 cs9d7p7 cnktlst ckugv9c c1tn15a6 cf3s0o8 c1po6n8k c17mudhx c1ngnjys cqe8zx8 c1lcqypt c1qt6nqv cawc695 cjzajcw cm26boj ck5khh cmasoy8 c1lgamaw`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n c1br3i3l cgsqhcf crwlurz cw2w0hb c1u62tv4 c1oiu8x9 c1j6b6hu cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"link"}
</Text>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c1jws19y c1o8kpn7 cynii78 c157gpv9 c1ks67gp cheo1gh`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c110rp94 c1o8kpn7 cynii78 c157gpv9 c1a8kyq6`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading czuftgd c1o8kpn7 cynii78 c157gpv9`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1uxsidq c1o8kpn7 cynii78 c157gpv9`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1uxsidq c1o8kpn7 cynii78 c157gpv9`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote c157gpv9 c1uaos4p c1mjo3o8 cizft8n c369a20`}>
<Span
className={`w-text-1 c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"list"}
</Text>
<List
className={`w-list c157gpv9`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"separator"}
</Text>
<Separator
className={`w-separator c1t7snfr cek2hwf cynii78 c157gpv9`} />
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c3ys3k cax1sfy c14p7bk2 cjkao7d cgareqf cakhfle c1ptbbu3 c1bo75c9`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Text
className={`w-text c1498n7r cnw4l8p c16lw8ma cbrz60d cf3s0o8 chb1jre cfgqv0i cxlx47q cuxe5i2 cx3p0oy`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box ced5x4n c1u62tv4 c1uezhpk ccmlmpp czp85x0`}>
<Box
className={`w-box ced5x4n c1u62tv4 c1b9lp23 cwp448k c1gm4z0s`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph c2tioub cuneir5`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box cgcyl9z c1d60p8d cfl2e3g c2t4vda c15xwryp`}>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n cs9d7p7 cnktlst crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text c3ys3k cax1sfy c14p7bk2 cjkao7d c1ptbbu3 cek2hwf c1bo75c9 ch24nj0`} />
</Box>
<Box
className={`w-box cfcj761 c1rctzvw cqpoj4q cmqw9ft ced5x4n c1br3i3l cgsqhcf crwlurz cw2w0hb c1u62tv4 cnl1130 ci0iuzx cmo417s c15okf2c`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c3ys3k cax1sfy c14p7bk2 cjkao7d cgareqf cakhfle c1ptbbu3 c1bo75c9`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c3ys3k cax1sfy c14p7bk2 cjkao7d c1ptbbu3 cek2hwf c1bo75c9 ch24nj0`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box cjq9ukh ctlmft8 cqi5lr9 cw3yhor ckushyt csns1dl cruubxf c1ptbbu3 c1sm7kb7 c19pcslg`}>
<Box
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1ov84un czp85x0 c7mrpie c1b9lp23 cwp448k c1ia31up c1xld2py coy0zyl`}>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Layout"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Colors"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Elements"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Forms"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Radix"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Utility"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Slots"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Custom"}
</Link>
<Link
className={`w-link cebsayn cnqeg4n cjssqmk c1b6vm0m c1ib0ozz cou9pn0 cs9u7kw c1igq926 c1tkt9qq c14ckhtc c1thl7ii c1cbys2 caw9ox9 cgleq8b c1gk2xpg c1o6zwwk c1fpd2nf cjzajcw cm26boj c1jje51m cc9m1ce ccoa2zb clhq44m c1ag5lu6 cf04v7y ck5khh cmasoy8`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1u62tv4 cs9d7p7 cnktlst ckugv9c c1tn15a6 c1ia31up c1xld2py c15qvzfm cxvqghw`}>
<Heading
tag={"h2"}
className={`w-heading cyhinnj c1o8kpn7 cynii78 c157gpv9`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph cuneir5 cf3s0o8 c7b1rez`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1u62tv4 czp85x0 cgsqhcf c5hug53 cl85nye c1ia31up c1xld2py`}>
<Link
className={`w-link`}>
<Image
loading={"eager"}
className={`w-image`} />
</Link>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box c15qvzfm cxvqghw`}>
<Box
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1u62tv4 czp85x0 cgsqhcf c5hug53 cl85nye c1ia31up c1xld2py`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box c1oidh7u c1xwd9uj cek2hwf cg8dfhg ced5x4n c1u62tv4 czp85x0 cgsqhcf c5hug53 cl85nye c1ia31up c1xld2py`} />
</Box>
<Link
href={"https://webstudio.is/"}
target={"_blank"}
rel={"nofollow"}
className={`w-link c6tvncn c1c39rli czlg2wp c1yp7f2w c1oqcft6 cw4xp0w cnmebpk cqi5lr9 cs9g3u1 c129u3ky czb9ks4 ce9bhf3 c1rynbw3 c1d201tg c1vw7byo c17mz2pj cm21ed9 cpwuqev colv6ll c1u1w8f5 c1b8o6qi cs9d7p7 cnktlst c11hnem6 c1tkt9qq c1mypzqs ci4zciv c6uxvif cs344j0 c11uh7yq c17htqh6 c2hk2b7 c13udndi c1sjxkif c1vm87vq`}>
<Image
src={"/assets/logo_r1qaJQiri6sK3rPyq-Sar.svg"}
width={20}
height={20}
alt={"Webstudio Logo"}
optimize={false}
className={`w-image c4bvw4z cmznzif`} />
<Text
tag={"span"}
className={`w-text`}>
{"Built with Webstudio"}
</Text>
</Link>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    