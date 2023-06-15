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
          <span v-else class="last-link">FAQ</span>
          <span v-if="index < items.length - 1" class="divider">/</span>
        </span>
      </div>
    </div>
    <div class="pb-15">
      <div class="p-4" style="display: flex; align-items: center">
        <v-card-title
          class="text-h6 text-md-h5 text-lg-h4"
          style="margin: 0 auto"
          >FAQ</v-card-title
        >
      </div>

      <div class="d-flex justify-center">
        <v-card width="50%" class="pa-5">
          <v-card-title class="text-h6 text-sm-h6 text-sm-h6"
            >Below you can find the answers to some of the most common questions
            we get asked.</v-card-title
          >
          <v-divider
            :thickness="3"
            class="border-opacity-75 mt-3 mb-3"
            color="success"
          ></v-divider>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Who should I reach out to?</v-card-title
          >
          <p>
            Our partner profiles can help you learn more about them and areas of
            interest, but the short answer is that you don’t need to worry about
            connecting with the “right” partner. We share our networks and
            expertise and we will always route opportunities to whoever is the
            best fit. When you drop one of us a line, you drop all of us a line.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >What is HEP’s Investment Thesis?</v-card-title
          >
          <p>
            We invest in early-stage companies that automate and digitize the
            physical world. We partner with companies building software- or
            hardware-based products (or a combination of both) as long as they
            are able to create long-term competitive advantages through
            technical defensibility. Members of Horizon Equity Partners alumni
            are our first source of new investments, but we also invest in
            companies outside of HEP.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >Does HEP invest globally?</v-card-title
          >
          <p>
            Yes, we are excited to meet talented founders everywhere in the
            world.
          </p>
          <v-card-title class="text-caption text-md-h5 font-weight-light"
            >How do I seek investment from HEP?</v-card-title
          >
          <p>
            You should first apply to Horizon Equity Partners. The best way for
            us to get to know you is to evaluate you as a member of our
            community. You will have a better chance of being noticed when
            you’re raising money if you are already a member of HEP.
          </p>
          <p>
            Our process of evaluating companies for investment begins with the
            same conversation we would have with you as a prospective member of
            Hardware Club. We may have multiple conversations with you and
            introduce you to different people at HEP. If these conversations go
            well, we will schedule a partner meeting, where all our partners get
            to know you better.
          </p>
          <p>
            In the partner meeting, we will ask you to put together a short deck
            to present for 15-20 minutes followed by 25-30 minutes of questions.
            We like to keep these meetings focused on short, data-driven
            discussion.
          </p>
          <p>
            We debrief during our regular team meetings. Because we are
            thorough, sometimes it can take us a few weeks to make a decision.
            Please be patient.
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
        href: "/about/faq",
      },
      {
        title: "FAQ",
        disabled: true,
        href: "/about/faq",
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
