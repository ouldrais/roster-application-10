package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.ResourceTrainingTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ResourceTrainingTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResourceTraining.class);
        ResourceTraining resourceTraining1 = getResourceTrainingSample1();
        ResourceTraining resourceTraining2 = new ResourceTraining();
        assertThat(resourceTraining1).isNotEqualTo(resourceTraining2);

        resourceTraining2.setId(resourceTraining1.getId());
        assertThat(resourceTraining1).isEqualTo(resourceTraining2);

        resourceTraining2 = getResourceTrainingSample2();
        assertThat(resourceTraining1).isNotEqualTo(resourceTraining2);
    }
}
