<template>
  <div>
    <Title>{{ title }}</Title>
    <Breadcrumbs :title="title" />
    <section class="px-4 py-12">
      <div class="md payment-terms">
        <h1 class="font-black mb-4 text-4xl">Payment Terms</h1>
        <div>
          <h3>How do I Make payments?</h3>
          <div>
            <div>
              <p>
                <span
                  >We only take payments via T/T, Bank wire transfer or wire
                  transfers via Western Union or MoneyGram or via world remit,
                  depending on how fast you want your order processed and
                  shipped out. Note that we do not take payments via
                  PayPal.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>What are the Payment Terms?</h3>
          <div>
            <div>
              <p>
                <span
                  >&ndash; For orders between 500 Boxes to 1000 boxes, Full
                  payment is required upfront. Orders above 1000 Boxes, 50%
                  required upon Invoice and the balance 50% paid against full
                  shipping documents.</span
                ><br /><span
                  >&ndash; C.O.D (Cash on Delivery) Is also available only to
                  clients we have supplied to before. That is to say, regular
                  customers. If it is your first time buying from us please do
                  note that you do not qualify for COD.</span
                ><br /><span
                  >&ndash;Letter of Credit (LC) Is for order above 10&times;40
                  Feet Containers.</span
                ><br /><span
                  >&ndash;Payment on Sight. Client need to make an order and pay
                  10% for processing fee before coming to our warehouse to
                  complete the transaction.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>How long does it take to process my payment?</h3>
          <div>
            <div>
              <p>
                <span
                  >&ndash; Processing time depends on the form of payment you
                  choose. Payments made via T/T or Bank Wire Transfer may take
                  up to 5 business days sometimes to be processed into our bank
                  account depending on intermediary banks involved.</span
                ><br /><span
                  >If you make payments via Wire Transfer (Western Union), we
                  are likely to confirm the payments the same day and your order
                  processed once we confirm the payments. We will send you a
                  confirmation email as soon as we have received your
                  payment.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>
              <span
                >What can I do to ensure there are no delays in processing my
                payment?</span
              >
            </h4>
          </div>
          <div>
            <div>
              <p>
                <span
                  >Delays in payments processing is mostly caused by
                  intermediary banks and also when you make payments via bank
                  transfer. We have gone further to create accounts with most
                  major banks with fast and reliable networks in order for
                  payments to be processed within the shortest time
                  possible.</span
                ><br /><span
                  >When placing your order, kindly notify us on which bank you
                  will be paying from so we can issue you with corresponding
                  bank details to speed up the transaction. Also, you need to
                  use the reference number on your Proforma Invoice. Be sure to
                  make your payment out for the correct amount including VAT and
                  shipping charges if applicable.</span
                ><br /><span
                  >For small orders, we always advise you make payments via Wire
                  Transfer(Western Union) so we can confirm payments and process
                  the orders as soon as possible.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>How do I cancel my order?</h3>
          <div>
            <div>
              <p>
                <span
                  >If you have not yet forwarded your payment, you can cancel
                  your order by calling us. Orders, where no payment has been
                  received, will be canceled automatically after 3 days. If you
                  want to cancel your order and have already forwarded payment,
                  we need to wait to receive payment before canceling your order
                  and we will require your bank details to process your
                  refund.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>
              <span
                >How soon will you ship my order after you receive my
                payment?</span
              >
            </h4>
          </div>
          <div>
            <div>
              <p>
                <span
                  >Once payment is confirmed, it takes between 2 to 3 days to
                  process your order. Once we process your order, we proceed to
                  have it shipped and all shipping documents will be sent to
                  your email and later posted via DHL as originals so you can
                  use it to clear your goods at the destination port.</span
                >
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>Can I change my shipping address?</h3>
          <div>
            <div>
              <p>
                <span
                  >Yes, you can contact us to change the shipping address before
                  and after your order is shipped. Change of address after the
                  order has been dispatched may result in additional shipping
                  charges depending on what the shippers will say.</span
                >
              </p>
              <div>
                <h4><span>Can I change my shipping address?</span></h4>
              </div>
              <div>
                <div>
                  <p>
                    <span
                      >Yes, you can&nbsp;<a href="/contact-us/">contact us</a
                      >&nbsp;to change the shipping address before and after
                      your order is shipped. Change of address after the order
                      has been dispatched may result in additional shipping
                      charges depending on what the shippers will say.</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = "Payment Terms";
</script>

<style scoped></style>
