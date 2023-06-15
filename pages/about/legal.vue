<template>
  <div class="pb-15 px-10">
    <div class="py-4">
      <div class="my-breadcrumbs">
        <span v-for="(item, index) in items" :key="index">
          <span v-if="!item.disabled">
            <router-link
              :to="item.href"
              :class="{
                'blue-link': index < items.length - 1,
                'last-link': index === items.length - 1,
              }"
              >{{ item.title }}</router-link
            >
          </span>
          <span v-else class="last-link">Legal</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="pb-15">
      <div class="p-4" style="display: flex; align-items: center">
        <v-card-title
          class="text-h6 text-md-h5 text-lg-h4"
          style="margin: 0 auto"
          >LEGAL</v-card-title
        >
      </div>

      <div class="d-flex justify-center">
        <v-card width="50%" class="pa-5">
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Terms of use</v-card-title
          >
          <p>
            Thanks for your interest in our Website at www.horizoneqp.com. Your
            use of this Website, including the content, materials and
            information available on or through this Website, is governed by
            these Terms of Use. By using this Website, you acknowledge that you
            have read and agree to these Terms.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Who are we</v-card-title
          >
          <p>
            This Website is maintained and operated by Horizon Equity Partners,
            which provides administrative and other services to various Horizon
            Equity Partners Capital entities. In accordance with industry
            custom, this Website occasionally uses terminology that may be
            interpreted to suggest that our firm is actually a single entity.
            However, there is no such single entity and all of the entities that
            comprise our firm have their own separate legal existence.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Third-party sites</v-card-title
          >
          <p>
            We accept no responsibility for third-party sites available through
            this Website, via hyperlink or otherwise. You are encouraged to
            review the terms of use applicable to those sites. Any access to, or
            use of, a third-party site is solely at your own risk.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Restrictions on use</v-card-title
          >
          <p>
            We reserve all rights with respect to the design and content of this
            Website. In particular, you must not misappropriate the design or
            content of this Website and you must not alter or deface such design
            or content in any way. Nothing on this Website grants any license
            with respect to such design or content, except that you may download
            and use Materials solely for your own personal information.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Ownership of trademarks, etc.</v-card-title
          >
          <p>
            All text, photos, graphics, logos, content and other Materials on
            this Website are protected by United States and foreign copyright,
            trademark and other applicable laws. In particular, all trademarks,
            trade names and logos displayed on this Website are proprietary to
            Sequoia Capital, its affiliates or their respective owners, and this
            Website grants no license to them.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Contact information</v-card-title
          >
          <p>
            Any questions, concerns or complaints regarding these Terms should
            be sent to complianceus@horizoneqp.com.
          </p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Home",
        disabled: false,
        href: "/",
      },
      {
        title: "About",
        disabled: false,
        href: "/about/legal",
      },
      {
        title: "Legal",
        disabled: true,
        href: "/about/legal",
      },
    ],
  }),
};
</script>

<style scoped>
.my-breadcrumbs {
  display: flex;
  align-items: center;
  padding-left: 0;
}

.my-breadcrumbs .divider {
  margin: 0 10px;
  color: #999;
}

.blue-link {
  color: #344c8e;
}

.last-link {
  color: rgb(55, 55, 55);
}
</style>
