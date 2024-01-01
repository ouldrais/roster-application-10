package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ShiftDemandTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ShiftDemandTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ShiftDemand.class);
        ShiftDemand shiftDemand1 = getShiftDemandSample1();
        ShiftDemand shiftDemand2 = new ShiftDemand();
        assertThat(shiftDemand1).isNotEqualTo(shiftDemand2);

        shiftDemand2.setId(shiftDemand1.getId());
        assertThat(shiftDemand1).isEqualTo(shiftDemand2);

        shiftDemand2 = getShiftDemandSample2();
        assertThat(shiftDemand1).isNotEqualTo(shiftDemand2);
    }
}
